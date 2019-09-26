$(document).ready(function() {
    const updatedata = (videoid) =>{
        $.get(`http://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoid}`, (response) => {
            console.log(response);
            $('#video-player').attr('src',`https://player.vimeo.com/video/${response.vimeoId}`);
            $('#views-count').html(response.views);
            $('#video-title').html(response.title);
            $('#video-description').html(response.description);

            $(window).scrollTop(0);
        })
    }
    function createPlaylistCard(obj, pos) {
        // <div id="card3" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
        //     <h3 class="video-card-title">The Heart of Soba</h3>
        // </div>

        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.className = 'playlist-card';

        if(pos===0)
        {
            mainDiv.classList.add('active-card');
            updatedata(obj.id);
        }

        var thumbnail = document.createElement('img');
        thumbnail.src = obj.thumbnail;
        thumbnail.className = 'thumbnail';

        var title = document.createElement('h3');
        title.className = 'video-card-title';
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        mainDiv.onclick =()=>{
            $('.playlist-card').removeClass('active-card');
            mainDiv.classList.add('active-card');
            updatedata(obj.id);
        }

        return mainDiv;
    }
    $('#playlist-wrapper').html('');
    $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',(response) =>{

            response.map((item,pos)=>{
                //console.log(createPlaylistCard(item));
                $('#playlist-wrapper').append(createPlaylistCard(item,pos));

            })
    })
});