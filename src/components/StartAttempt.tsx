import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);

    function startStopQuiz(): void {
        setInProgress(!inProgress);   
    }

    function addAttempts(): void {
        setAttempts(attempts + 1);
    }

    function subAttempts(): void {
        setAttempts(attempts - 1);
        startStopQuiz();
    }


    

    return (
        <div>
            <Button onClick={subAttempts} disabled={inProgress || attempts === 0}>Start Quiz</Button>
            <Button onClick={startStopQuiz} disabled={!inProgress}>Stop Quiz</Button>
            <Button onClick={addAttempts} disabled={inProgress}>Mulligan</Button>
            Attempts left {attempts}
        </div>
    );
}
