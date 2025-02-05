// Function to open the booking page and display tour details
function openBookingPage(tourName) {
    // Hide the tour display and show the booking page
    document.querySelector('h1').style.display = 'none';
    document.querySelectorAll('.tour').forEach(tour => {
        tour.style.display = 'none';
    });
    document.getElementById('booking-page').classList.remove('hidden');

    // Display a description based on the selected tour
    let tourDescription = '';
    switch(tourName) {
        case 'Agra':
            tourDescription = `
                Agra is one of the most beautiful cities in India, famous for the Taj Mahal, a UNESCO World Heritage site and one of the Seven Wonders of the World. Agra offers visitors an opportunity to explore its rich Mughal history, including the Agra Fort and Fatehpur Sikri, along with a vibrant market culture. Visitors can enjoy a variety of delicious Mughlai cuisine, and there are several beautiful gardens and mosques to explore. This is the perfect trip for anyone looking to witness some of the finest examples of Mughal architecture in India. Experience the grandeur and timeless beauty of Agra's historical landmarks, and don’t forget to visit the Taj Mahal at sunrise for the most breathtaking view. This tour is perfect for history enthusiasts, families, and couples alike, offering a peaceful yet awe-inspiring experience.
            `;
            break;
        case 'Golden Temple':
            tourDescription = `
                The Golden Temple, located in Amritsar, India, is one of the most revered religious sites in the world. Known for its stunning architecture and serene atmosphere, the temple is surrounded by a large pool of water and is a significant pilgrimage site for Sikhs. The Golden Temple is also known for its langar, a community kitchen that serves free meals to thousands of visitors daily. Visitors can learn about the history and culture of Sikhism, enjoy the peaceful surroundings, and witness the daily rituals and prayers. Amritsar is also famous for its vibrant markets, food, and the historical Jallianwala Bagh. A visit to the Golden Temple offers a deeply spiritual experience for people of all faiths. It is an experience that embodies tranquility, peace, and the essence of Indian spiritual life.
            `;
            break;
        case 'Taj Mahal':
            tourDescription = `
                The Taj Mahal, one of the most iconic landmarks in the world, is located in Agra, India. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it is a symbol of love and architectural brilliance. Visitors can marvel at the stunning white marble architecture, which reflects the rich Mughal era. The Taj Mahal is surrounded by lush gardens, water features, and the Yamuna River, creating a breathtaking view, especially at sunrise and sunset. Visitors will also have the chance to explore the nearby Agra Fort and other historical sites, making this tour a must-see for anyone interested in India’s rich cultural heritage.
            `;
            break;
        case 'Delhi & Agra':
            tourDescription = `
                The Delhi & Agra Tour offers an exciting glimpse into India’s most famous historical landmarks. Delhi, the capital city, is a blend of old and new, with its ancient temples, bustling markets, and modern architecture. Agra, on the other hand, is home to the Taj Mahal, one of the Seven Wonders of the World. This tour provides an excellent opportunity to explore India’s rich history, culture, and heritage in just one trip. You will visit the India Gate, Humayun’s Tomb, and the Red Fort in Delhi, and the Taj Mahal, Agra Fort, and Fatehpur Sikri in Agra. This tour is a perfect combination of history, culture, and breathtaking architecture.
            `;
            break;
        case 'Customisable':
            tourDescription = `
                Customisable tours give you the flexibility to explore India the way you want. Whether you’re interested in adventure, culture, history, or nature, you can design your own tour itinerary. You can select the cities, landmarks, and activities you want to include, making this the perfect option for travelers seeking a more personalized experience. From the tranquil beaches of Goa to the majestic Himalayan mountains, there’s something for everyone. You can also include activities like trekking, wildlife safaris, or yoga retreats, ensuring your trip is as unique as you are.
            `;
            break;
    }
    document.getElementById('tour-description').innerHTML = tourDescription;
}
