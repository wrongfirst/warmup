from datetime import datetime, timedelta
import calendar
import re

def delivery_date(meeting_start: str, description: str) -> str:
    dt = datetime.strptime(meeting_start, "%Y-%m-%dT%H:%M:%S")
    
    if description == "NOW":
        res = dt + timedelta(hours=2)
        return res.strftime("%Y-%m-%dT%H:%M:%S")
    
    if description == "ASAP":
        if dt.hour < 13:
            return dt.strftime("%Y-%m-%dT17:00:00")
        else:
            tomorrow = dt + timedelta(days=1)
            return tomorrow.strftime("%Y-%m-%dT13:00:00")
            
    if description == "EOW":
        weekday = dt.weekday()
        if weekday <= 2:
            days_to_add = 4 - weekday
            target = dt + timedelta(days=days_to_add)
            return target.strftime("%Y-%m-%dT17:00:00")
        else:
            days_to_add = (6 - weekday) % 7
            target = dt + timedelta(days=days_to_add)
            return target.strftime("%Y-%m-%dT20:00:00")
            
    m_match = re.match(r"^(\d+)M$", description)
    if m_match:
        n = int(m_match.group(1))
        target_year = dt.year if dt.month < n else dt.year + 1
        d = datetime(target_year, n, 1)
        while d.weekday() >= 5:
            d += timedelta(days=1)
        return d.strftime("%Y-%m-%dT08:00:00")
        
    q_match = re.match(r"^Q(\d+)$", description)
    if q_match:
        q = int(q_match.group(1))
        start_q = (dt.month - 1) // 3 + 1
        target_year = dt.year if start_q <= q else dt.year + 1
        end_month = q * 3
        last_day = calendar.monthrange(target_year, end_month)[1]
        d = datetime(target_year, end_month, last_day)
        while d.weekday() >= 5:
            d -= timedelta(days=1)
        return d.strftime("%Y-%m-%dT08:00:00")
        
    return meeting_start
