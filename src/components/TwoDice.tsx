import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [leftDieValue, setLeftDie] = useState<number>(3);
    let [rightDieValue, setRightDie] = useState<number>(6);

    function rollLeftDie(): void {
        setLeftDie(leftDieValue = d6());
    }

    function rollRightDie(): void {

    }

    return (
        <div>
            <Button onClick={rollLeftDie}>Roll Left</Button>
            <Button onClick={rollRightDie}>Roll Right</Button>
        </div>
    );
}
