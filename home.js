//ボタンアクション
document.getElementsByTagName('button')[0].addEventListener('click', () => {
  document.location.href = "about.html";
});

document.getElementsByTagName('button')[1].addEventListener('click', () => {
  document.location.href = "patchnote.html";
});

document.getElementsByTagName('button')[2].addEventListener('click', () => {
  if (myselect.value == 0) {
    document.location.href = "1v1.html";
  } else if (myselect.value == 1) {
    document.location.href = "2v2.html";
  } else if (myselect.value == 2) {
    document.location.href = "3v3.html";
  } else if (myselect.value == 3) {
    document.location.href = "4v4.html";
  } else if (myselect.value == 4) {
    document.location.href = "5v5.html";
  } else {
    window.alert('人数を選択してください。');
  }
});
