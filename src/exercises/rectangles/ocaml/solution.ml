let count lines =
  if lines = [] || List.hd lines = "" then 0
  else
    let grid = Array.map (fun s -> Array.init (String.length s) (fun i -> s.[i])) (Array.of_list lines) in
    let rows = Array.length grid in
    let cols = Array.length grid.(0) in
    let total = ref 0 in

    for r1 = 0 to rows - 1 do
      for c1 = 0 to cols - 1 do
        if grid.(r1).(c1) = '+' then
          for r2 = r1 + 1 to rows - 1 do
            for c2 = c1 + 1 to cols - 1 do
              if grid.(r1).(c2) = '+' && grid.(r2).(c1) = '+' && grid.(r2).(c2) = '+' then begin
                let valid = ref true in

                let c = ref (c1 + 1) in
                while !c < c2 && !valid do
                  if (grid.(r1).(!c) <> '-' && grid.(r1).(!c) <> '+') ||
                     (grid.(r2).(!c) <> '-' && grid.(r2).(!c) <> '+') then
                    valid := false;
                  incr c
                done;

                let r = ref (r1 + 1) in
                while !r < r2 && !valid do
                  if (grid.(!r).(c1) <> '|' && grid.(!r).(c1) <> '+') ||
                     (grid.(!r).(c2) <> '|' && grid.(!r).(c2) <> '+') then
                    valid := false;
                  incr r
                done;

                if !valid then incr total
              end
            done
          done
      done
    done;
    !total
