type Enumerate<Start extends number, End extends number[] = []> = End["length"] extends Start
    ? End[number]
    : Enumerate<Start, [...End, End["length"]]>;

export type NumberRange<Start extends number, End extends number> = Exclude<Enumerate<End>, Enumerate<Start>> | End;
