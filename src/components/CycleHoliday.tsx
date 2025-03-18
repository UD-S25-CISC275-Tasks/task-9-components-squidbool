import React, { useState } from "react";
import { Button } from "react-bootstrap";


interface Holiday {
    name: string;
    date: number;
    emoji: string;
}

export function CycleHoliday(): React.JSX.Element {
    const holidays: Holiday[] = [{name: "Christmas", date: 358, emoji: "🎄"}, {name: "Halloween", date: 303, emoji: "🎃"}, 
        {name: "New Year's", date: 0, emoji: "🆕"}, {name: "Saint Patrick's Day", date: 75, emoji: "🍀"},
        {name: "Valentine's Day", date: 44, emoji: "💗"}];
    
    const [currentHoliday, setHoliday] = useState<Holiday>(holidays[0]);

    function changeByDate(): void {
        if (currentHoliday.name === "New Year's") {
            setHoliday(holidays[4]);
        } else if (currentHoliday.name === "Valentine's Day") {
            setHoliday(holidays[3]);
        } else if (currentHoliday.name === "Saint Patrick's Day") {
            setHoliday(holidays[1]);
        } else if (currentHoliday.name === "Halloween") {
            setHoliday(holidays[0]);
        } else {
            setHoliday(holidays[2]);
        }
        
    }

    function changeAlphabetically () : void {
        if (currentHoliday.name === "Christmas") {
            setHoliday(holidays[1]);
        } else if (currentHoliday.name === "Halloween") {
            setHoliday(holidays[2]);
        } else if (currentHoliday.name === "New Year's") {
            setHoliday(holidays[3]);
        } else if (currentHoliday.name === "Saint Patrick's Day") {
            setHoliday(holidays[4]);
        } else {
            setHoliday(holidays[0]);
        }
    }

    return (
        <div>
            <Button onClick={changeAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={changeByDate}>Advance by Year</Button>
            {currentHoliday.name + ": " + currentHoliday.emoji}
        </div>
    );
}
