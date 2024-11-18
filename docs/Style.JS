document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', () => {
      // Remove 'clicked' class from all members
      document.querySelectorAll('.team-member').forEach(item => item.classList.remove('clicked'));
      // Add 'clicked' class to the clicked member
      member.classList.add('clicked');
    });
  });
