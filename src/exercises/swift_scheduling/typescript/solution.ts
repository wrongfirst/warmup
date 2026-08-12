function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function formatDate(d: Date): string {
  const yyyy = d.getUTCFullYear();
  const mm = pad2(d.getUTCMonth() + 1);
  const dd = pad2(d.getUTCDate());
  const hh = pad2(d.getUTCHours());
  const min = pad2(d.getUTCMinutes());
  const ss = pad2(d.getUTCSeconds());
  return `${yyyy}-${mm}-${dd}T${hh}:${min}:${ss}`;
}

export function deliveryDate(meetingStart: string, description: string): string {
  const dt = new Date(meetingStart + "Z");
  const year = dt.getUTCFullYear();
  const month = dt.getUTCMonth() + 1; // 1-12
  const day = dt.getUTCDate();
  const hour = dt.getUTCHours();
  const dayOfWeek = dt.getUTCDay(); // 0=Sun, 1=Mon, ..., 6=Sat

  if (description === "NOW") {
    const res = new Date(dt.getTime() + 2 * 3600 * 1000);
    return formatDate(res);
  }

  if (description === "ASAP") {
    if (hour < 13) {
      return `${year}-${pad2(month)}-${pad2(day)}T17:00:00`;
    } else {
      const tomorrow = new Date(dt.getTime() + 24 * 3600 * 1000);
      const ty = tomorrow.getUTCFullYear();
      const tm = pad2(tomorrow.getUTCMonth() + 1);
      const td = pad2(tomorrow.getUTCDate());
      return `${ty}-${tm}-${td}T13:00:00`;
    }
  }

  if (description === "EOW") {
    let daysToAdd = 0;
    let targetHour = 17;
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      daysToAdd = 5 - dayOfWeek;
      targetHour = 17;
    } else {
      daysToAdd = (7 - dayOfWeek) % 7;
      targetHour = 20;
    }
    const target = new Date(dt.getTime() + daysToAdd * 24 * 3600 * 1000);
    const ty = target.getUTCFullYear();
    const tm = pad2(target.getUTCMonth() + 1);
    const td = pad2(target.getUTCDate());
    return `${ty}-${tm}-${td}T${pad2(targetHour)}:00:00`;
  }

  const mMatch = description.match(/^(\d+)M$/);
  if (mMatch) {
    const n = parseInt(mMatch[1], 10);
    const targetYear = month < n ? year : year + 1;
    let date = new Date(Date.UTC(targetYear, n - 1, 1));
    while (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
      date = new Date(date.getTime() + 24 * 3600 * 1000);
    }
    const ty = date.getUTCFullYear();
    const tm = pad2(date.getUTCMonth() + 1);
    const td = pad2(date.getUTCDate());
    return `${ty}-${tm}-${td}T08:00:00`;
  }

  const qMatch = description.match(/^Q(\d+)$/);
  if (qMatch) {
    const q = parseInt(qMatch[1], 10);
    const startQ = Math.floor((month - 1) / 3) + 1;
    const targetYear = startQ <= q ? year : year + 1;
    const endMonth = q * 3;
    let date = new Date(Date.UTC(targetYear, endMonth, 0));
    while (date.getUTCDay() === 0 || date.getUTCDay() === 6) {
      date = new Date(date.getTime() - 24 * 3600 * 1000);
    }
    const ty = date.getUTCFullYear();
    const tm = pad2(date.getUTCMonth() + 1);
    const td = pad2(date.getUTCDate());
    return `${ty}-${tm}-${td}T08:00:00`;
  }

  return meetingStart;
}
