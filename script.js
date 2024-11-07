document.addEventListener('DOMContentLoaded', function () {
    // Array of videos
    const videos = [
        { title: 'Video 1', description: 'Description for Video 1', src: 'path/to/video1.mp4' },
        { title: 'Video 2', description: 'Description for Video 2', src: 'path/to/video2.mp4' },
        { title: 'Video 3', description: 'Description for Video 3', src: 'path/to/video3.mp4' },
    ];

    const videoGrid = document.getElementById('video-grid');
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');
    const videoModalTitle = document.getElementById('videoModalLabel');

    // Dynamically generate video cards
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.classList.add('col-md-4', 'video-card');

        videoCard.innerHTML = `
            <h5>${video.title}</h5>
            <p>${video.description}</p>
            <button class="btn btn-primary watch-now" data-index="${index}">Watch Now</button>
        `;
        videoGrid.appendChild(videoCard);
    });

    // Event delegation for "Watch Now" buttons
    videoGrid.addEventListener('click', function (event) {
        if (event.target.classList.contains('watch-now')) {
            const index = event.target.getAttribute('data-index');
            const selectedVideo = videos[index];

            // Update modal title and video source
            videoModalTitle.textContent = selectedVideo.title;
            videoPlayer.src = selectedVideo.src;

            // Show the modal
            $(videoModal).modal('show');
        }
    });

    // Stop video playback when modal is closed
    $('#videoModal').on('hidden.bs.modal', function () {
        videoPlayer.pause();
        videoPlayer.src = '';
    });
});
