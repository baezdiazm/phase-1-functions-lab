// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    let blocks
    blocks = distance - 42

    if (blocks < 0) {
        blocks = blocks * (-1)
    }
    return blocks
}

function distanceFromHqInFeet(distance) {
    let feet
    feet = (distance - 42) * 264
    if (distance < 42) {
        feet = feet * -1
    }
    return feet
}

function distanceTravelledInFeet(p1, p2) {
    let feet = 264
    let p3 = (p2 - p1)
    if (p1 < 42) {
        p3 = p3 * -1
    }
    return p3 * feet
}

function calculatesFarePrice(start, dest) {
    let dist = dest - start
    let feet 
    if (dist < 0) {dist = dist * -1}
    feet = (dist * 264)
    console.log(feet)

    if (feet > 2500) {
        return `cannot travel that far`  
    }
    else if (feet > 2000) {
        return 25
    }
    else if (feet > 400) {
        return (feet - 400) * 0.02
    }
    else if (feet < 400) {
        return 0
    }
}