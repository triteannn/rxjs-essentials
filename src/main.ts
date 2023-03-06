import {
  AsyncSubject,
  BehaviorSubject,
  catchError,
  finalize,
  from,
  map,
  Observable,
  of,
  ReplaySubject,
  Subject,
} from "rxjs";

/* const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

const observer = observable.subscribe(console.log); */

/* const observableFrom = from([10, 20, 30]);
observableFrom.subscribe((res) => console.log("Res ", res));

const observable1 = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4);
});

observable1
  .pipe(
    finalize(() => {
      console.log("Hola");
    })
  )
  .subscribe((res) => console.log("Observable1 ", res)); */

/* const observable1 = new Observable((subscriber) => {
  try {
    subscriber.next(1);
    subscriber.next(2);
    throw Error("Oops!");
    subscriber.next(3);
    subscriber.complete();
    subscriber.next(4);
  } catch (err) {
    subscriber.error(err);
  }
});

observable1
  .pipe(
    finalize(() => {
      console.log("Hola");
    })
  )
  .subscribe({
    next: (res) => console.log("Observable1 ", res),
    error: (err) => console.log(err),
  }); */

/* const observer = {
  next: (x: unknown) => console.log("Observer got a next value: " + x),
  error: (err: unknown) => console.error("Observer got an error: " + err),
  complete: () => console.log("Observer got a complete notification"),
};

const observable2 = of(1, 2);
observable2.subscribe(observer); */

const observable3 = of(1, 2);

/* observable3
  .pipe(map((x) => x + 2))
  .subscribe((value) => console.log(`value: ${value}`));

observable3.subscribe((value) => console.log(`valueee: ${value}`)); */

///////////////////////////////////////////////////////////////// Subjects ////////////////////////////////////////////////

/* const subject = new Subject<number>();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(1);
subject.next(2); */

/* const subject = new BehaviorSubject<number>(0);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.next(1);
subject.next(2);

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

subject.next(3); */

/* const subject = new ReplaySubject<number>(2);

subject.subscribe({
  next: (value) => console.log(`observerA: ${value}`),
});
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);

subject.subscribe({
  next: (value) => console.log(`observerB: ${value}`),
});

subject.next(6); */

/* const subject = new AsyncSubject<number>();

subject.subscribe({
  next: (value) => console.log(`observerA: ${value}`),
});
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.next(5);

subject.subscribe({
  next: (value) => console.log(`observerB: ${value}`),
});

subject.next(6);
subject.complete(); */
