export { };

// Duplicate function implementation in TypeScript

// EXAMPLE 1 - Having a glitch due to legacy script files

function sum() { }

export { }; // 👈️ make file ES Module

// ---------------------------------------------------

// // EXAMPLE 2 - Trying to use function overloads

// function reverse(a: string): string;
// function reverse(a: string[]): string[];
// function reverse(a: string | string[]): string | string[] {
//   // your implementation
//   return 'bobbyhadz.com'
// }

// ---------------------------------------------------

// // EXAMPLE 3 - Example with 2 overload signatures

// function createDate(timestamp: number): Date;
// function createDate(year: number, month: number, day: number): Date;
// function createDate(
//   yearOrTimestamp: number,
//   month?: number,
//   day?: number,
// ): Date {
//   if (month !== undefined && day !== undefined) {
//     return new Date(yearOrTimestamp, month, day);
//   }

//   return new Date(yearOrTimestamp);
// }

// const date1 = createDate(1647778643657);
// console.log(date1); // 👉️ Sun Mar 20 2022

// const date2 = createDate(2023, 9, 24);
// console.log(date2); // 👉️ Tue Oct 24 2023

// ---------------------------------------------------

// // Overload signature not compatible with Implementation signature

// // EXAMPLE 4 - Make sure the implementation signature is compatible with the overload signatures

// function example(str: string): void;
// function example(num: number): void;
// function example(arg: string | number) { } 

// ---------------------------------------------------

// // EXAMPLE 5 - The implementation signature cannot be called directly

// function createDate(timestamp: number): Date;
// function createDate(year: number, month: number, day: number): Date;
// function createDate(
//   yearOrTimestamp: number,
//   month?: number,
//   day?: number,
// ): Date {
//   if (month !== undefined && day !== undefined) {
//     return new Date(yearOrTimestamp, month, day);
//   }

//   return new Date(yearOrTimestamp);
// }

// // ⛔️ Error: No overload expects 2 arguments,
// // but overloads do exist that expect either 1 or 3 arguments.ts(2575)
// const date3 = createDate(2023, 4);