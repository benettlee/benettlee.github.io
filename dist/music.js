const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '漂洋过海来看你',
        artist: '娃娃',
        url: 'http://music.163.com/song/media/outer/url?id=298490.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001zL2s13vWtnI_1.jpg',
      },
	  {
        name: '挪威的森林',
        artist: '伍佰 & China Blue',
        url: 'http://music.163.com/song/media/outer/url?id=157288.mp3',
        cover: '/images/挪威的森林.jpg',
      }, 	  
    ]
});