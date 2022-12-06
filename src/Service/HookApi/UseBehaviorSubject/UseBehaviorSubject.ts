import { useEffect, useRef }                                   from 'react';
import { MonoTypeOperatorFunction, OperatorFunction, BehaviorSubject } from 'rxjs';

export const useBehaviorSubject = <TBehavior>(behaviorValue: TBehavior, subscription: () => void,...pipe: (MonoTypeOperatorFunction<any>|OperatorFunction<any, any>)[]) => {

    const subject$ = useRef(new BehaviorSubject<TBehavior>(behaviorValue))

    useEffect(() => {
        // @ts-ignore ignore the pipe tuple typescript error
        const eventSubscription = subject$.current.pipe(...pipe).subscribe(subscription);

        return () => {
            eventSubscription.unsubscribe();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return subject$;
}