import {useEffect, useRef} from 'react';
import {MonoTypeOperatorFunction, OperatorFunction, Subject} from 'rxjs';

export const useSubject = <TSubscriptionArguments>(subscription: (value: TSubscriptionArguments) => void, ...pipe: (MonoTypeOperatorFunction<any> | OperatorFunction<any, any>)[]) => {

    const subject$ = useRef(new Subject<TSubscriptionArguments>())

    useEffect(() => {
        // @ts-ignore ignore the pipe tuple typescript error
        const eventSubscription = subject$.current.pipe(...pipe).subscribe(subscription);

        return () => {
            eventSubscription.unsubscribe();
        }
    });

    return subject$.current;
}