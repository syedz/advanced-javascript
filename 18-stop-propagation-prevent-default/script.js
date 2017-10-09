/*
    stopPropagation() and preventDefault()

    stopPropagation stops the event from going down
    the event capturing phase, or going up the event
    bubbling phase. Stops from moving to next callback.

    Event doesn't move to the next listener, until the
    previous event has finished. As it's propogating,
    it's not asynchronous.

    preventDefault() doesn't stop anything, checkbox
    in our case wasn't checked. This prevents the default
    behaviour, that that event would have triggered, in
    whatever element you performed the event on.
*/
