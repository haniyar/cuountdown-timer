// Set the launch date (YYYY-MM-DD)
const launchDate = new Date('2023-10-30T00:00:00Z').getTime();

// Update the countdown every second
const interval = setInterval(() => {
    // Get today's date and time (ms)
    const now = new Date().getTime();

    // Calculate the time remaining (ms)
    const timeRemaining = launchDate - now;

    // Calculate days, hours, minutes, and seconds remaining
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Output the result
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

    // If the countdown is over, stop the interval
    // Output the result
    document.getElementById('days').innerHTML = `${days}`;
    document.getElementById('hours').innerHTML = `${hours}`;
    document.getElementById('minutes').innerHTML = `${minutes}`;
    document.getElementById('seconds').innerHTML = `${seconds}`;

    // If the countdown is over, stop the interval
    if (timeRemaining < 0) {
        clearInterval(interval);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
    }
}, 1000);