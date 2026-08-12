let encode input =
  let len = String.length input in
  if len = 0 then ""
  else
    let buf = Buffer.create len in
    let count = ref 1 in

    for i = 0 to len - 1 do
      if i + 1 < len && input.[i] = input.[i + 1] then
        incr count
      else (
        if !count > 1 then Buffer.add_string buf (string_of_int !count);
        Buffer.add_char buf input.[i];
        count := 1
      )
    done;

    Buffer.contents buf

let decode input =
  let len = String.length input in
  if len = 0 then ""
  else
    let buf = Buffer.create len in
    let count_buf = Buffer.create 4 in

    String.iter (fun ch ->
      if ch >= '0' && ch <= '9' then
        Buffer.add_char count_buf ch
      else (
        let count =
          if Buffer.length count_buf > 0 then (
            let n = int_of_string (Buffer.contents count_buf) in
            Buffer.clear count_buf;
            n
          ) else 1
        in
        for _ = 1 to count do
          Buffer.add_char buf ch
        done
      )
    ) input;

    Buffer.contents buf
