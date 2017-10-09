/*
    Event bubbling and event capturing

    When button is pressed, it goes from the window,
    all the way down the tree to the target (the button).
    Once the event is fired, it goes back up to the
    window. Goes from root to the target, back to the
    root.

    These are called phases. From root to target is called
    event capturing phase (phase 1). From target to root
    is called event bubbling phase (phase 2).

    Can add event listeners that listen to each phase. If
    not specified, it listens to the event bubbling phase.
*/
