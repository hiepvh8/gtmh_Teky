const courseItems = document.querySelectorAll('.course');

courseItems.forEach(item => {
    item.addEventListener('click', function() {
        window.location.href = this.querySelector('a').getAttribute('href');
    });
});

// const courseItems = document.querySelectorAll('.course');
// const detailsContainer = document.querySelector('.details-container');

// courseItems.forEach(item => {
//     item.addEventListener('click', function() {
//         const courseId = this.getAttribute('data-course-id');
//         const details = document.getElementById(`course-${courseId}`);
        
//         // Ẩn tất cả các chi tiết môn học
//         const allDetails = detailsContainer.querySelectorAll('.details');
//         allDetails.forEach(detail => {
//             detail.style.display = 'none';
//         });

//         // Hiển thị chi tiết môn học tương ứng
//         details.style.display = 'block';
//     });
// });
