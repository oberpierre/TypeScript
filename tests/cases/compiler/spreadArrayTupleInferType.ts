// @noEmit: true
// Reproduction of #50875

type TupleType = [
    func: () => void,
    arg2: number,
];

const foo = () => {
    const tuples: TupleType[] = [];
    tuples.forEach(([callback, ...args]) => {})
}

enum TupleTypes {
    A,
    B,
}

interface MyInterface {
    [TupleTypes.A]: [
       func: (arg: boolean) => void,
       arg2: number,
    ];
    [TupleTypes.B]: [
        func: (arg: string) => void,
        arg2: symbol,
    ];
}

const bar = <T extends TupleTypes>() => {
    const tuples: Array<MyInterface[T]> = [];
    tuples.forEach(([callback, ...args]) => {});
}


const foobar = (type: TupleTypes) => {
    const tuples: Array<MyInterface[TupleTypes]> = [];
    tuples.forEach(([callback, ...args]) => {});
}
