const stations = [
  {
    id: 1,
    call_sign: "WXYC",
    broadcast_frequency: "89.3",
    audio_url: "https://audio-mp3.ibiblio.org/wxyc.mp3",
    station_url: "https://wxyc.org/",
    college_name: "University of North Carolina at Chapel Hill",
    public_private: "public",
    city: "Chapel Hill",
    state: "NC",
    station_image: "https://radiostationusa.fm/assets/image/radio/180/WXYC.jpg",
    college_image:
      "https://assets-sports.thescore.com/basketball/team/756/logo.png",
    palette: ["#a4c0e4", "#263663", "#5e6687", "#6c7491"],
  },
  {
    id: 2,
    call_sign: "KALX",
    broadcast_frequency: "90.7",
    audio_url: "https://stream.kalx.berkeley.edu:8443/kalx-128.mp3",
    station_url: "https://www.kalx.berkeley.edu/",
    college_name: "University of California, Berkeley",
    public_private: "public",
    city: "Berkeley",
    state: "CA",
    station_image:
      "https://www.kalx.berkeley.edu/sites/default/files/styles/large/public/KALX-55.png?itok=RaHLCXkA",
    college_image: "https://wwll.com/images/logos/teams/cal-256.png",
    palette: ["#092f63", "#f2c134", "#fcf9f3", "#4e566c"],
  },
  {
    id: 3,
    call_sign: "KVRX",
    broadcast_frequency: "91.7",
    audio_url: "https://www.kvrx.org/now_playing/stream",
    station_url: "https://kvrx.org/app/",
    college_name: "University of Texas at Austin",
    public_private: "public",
    city: "Austin",
    state: "TX",
    station_image:
      "https://pbs.twimg.com/profile_images/1021906128332980224/tgMrKr7O_400x400.jpg",
    college_image:
      "https://assets-sports.thescore.com/basketball/team/1069/logo.png",
    palette: ["#d46c2c", "#d86c2c", "#d86c2c", "#d86c2c"],
  },
  {
    id: 6,
    call_sign: "WSUM",
    broadcast_frequency: "91.7",
    audio_url: "https://ice23.securenetsystems.net/WSUMFM",
    station_url: "https://wsum.org/",
    college_name: "University of Wisconsin—Madison",
    public_private: "public",
    city: "Madison",
    state: "WI",
    station_image:
      "https://www.radio.net/images/broadcasts/ec/fb/11375/c300.png",
    college_image:
      "https://www.badgerselect.com/assets/images/FAVIcon/android-chrome-256x256.png",
    palette: ["#a30505", "#f9f7f7", "#0c0707", "#b17c7c"],
  },
  {
    id: 7,
    call_sign: "KCOU",
    broadcast_frequency: "88.1",
    audio_url: "https://ssl.shoutcaststreaming.us:8088/stream",
    station_url: "https://kcou.fm/",
    college_name: "University of Missouri",
    public_private: "public",
    city: "Columbia",
    state: "MO",
    station_image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Kcou-logo.jpg/200px-Kcou-logo.jpg",
    college_image:
      "https://assets-sports.thescore.com/basketball/team/684/logo.png",
    palette: ["#edc96f", "#120f07", "#9d988a", "#7c7c7c"],
  },
  {
    id: 17,
    call_sign: "KAMP",
    broadcast_frequency: "1570",
    audio_url: "https://ice42.securenetsystems.net/KAMP",
    station_url: "https://www.kampstudentradio.com/",
    college_name: "University of Arizona",
    public_private: "Public",
    city: "Tucson",
    state: "AZ",
    station_image:
      "https://static.mytuner.mobi/media/tvos_radios/uzkpp2kqse7c.jpg",
    college_image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Arizona_Wildcats_logo.svg/200px-Arizona_Wildcats_logo.svg.png",
    palette: ["#05255d", "#faf9fa", "#bd0f3e", "#dc7c94"],
  },
  {
    id: 19,
    call_sign: "WDBM",
    broadcast_frequency: "88.9",
    audio_url:
      "https://cors-proxy.elfsight.com/http://play.impact89fm.org:8000/impact89fm",
    station_url: "https://impact89fm.org/",
    college_name: "Michigan State University",
    public_private: "Public",
    city: "East Lansing",
    state: "MI",
    station_image:
      "https://impact89fm.org/wp-content/uploads/2015/03/MainLogo-300x3001.png",
    college_image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Michigan_State_Athletics_logo.svg/1200px-Michigan_State_Athletics_logo.svg.png",
    palette: ["#1c443c", "#14443c", "#20443c", "#20443c"],
  },
  // {
  //   id: 14,
  //   call_sign: "WPGU",
  //   broadcast_frequency: "107.1",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://ice64.securenetsystems.net/WPGUFM",
  //   station_url: "http://illinimedia.org/",
  //   college_name: "University of Illinois-Urbana-Champaign",
  //   public_private: "Public",
  //   city: "Champaign",
  //   state: "IL",
  //   station_image:
  //     "https://media-exp1.licdn.com/dms/image/C4E0BAQGlh_vDeKpWIQ/company-logo_200_200/0/1521359015698?e=2147483647&v=beta&t=NDMNDJlDJXyrHEYyzJsVvSkGbmbveL-WBukDv-NqGx8",
  //   college_image:
  //     "https://b.fssta.com/uploads/application/college/team-logos/Illinois.png",
  //   palette: ["#eb4b24", "#142c4c", "#65383f", "#342c44"],
  // },
  // {
  //   id: 16,
  //   call_sign: "WWVU",
  //   broadcast_frequency: "91.7",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://n0a.radiojar.com/56p3rt9eytzuv?1665850857=&rj-tok=AAABg9x8ZxMAGQavy8qgdTpyMQ&rj-ttl=5",
  //   station_url: "https://u92themoose.com/",
  //   college_name: "West Virginia University",
  //   public_private: "Public",
  //   city: "Morgantown",
  //   state: "WV",
  //   station_image:
  //     "https://cdn-profiles.tunein.com/s23884/images/logog.png?t=159614",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/West_Virginia_Mountaineers_logo.svg/175px-West_Virginia_Mountaineers_logo.svg.png",
  //   palette: ["#042c54", "#042454", "#082c54", "#082c54"],
  // },
  // {
  //   id: 18,
  //   call_sign: "KFJC",
  //   broadcast_frequency: "89.7",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://netcast.kfjc.org/kfjc-128k-mp3",
  //   station_url: "https://kfjc.org/",
  //   college_name: "Foothill College",
  //   public_private: "Public",
  //   city: "Los Altos Hills",
  //   state: "CA",
  //   station_image:
  //     "https://kfjc.org/static/images/logos/classic.color.gifs/classic.color.600x470.gif",
  //   college_image:
  //     "https://www.wemakescholars.com/admin/uploads/providers/fiG-Xq69emSoKM8DaEpfSu42f90Mo11c.png",
  //   palette: ["#ac1c2c", "#8e1c24", "#b4202c", "#b02028"],
  // },
  // {
  //   id: 26,
  //   call_sign: "WVFS",
  //   broadcast_frequency: "89.7",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://voice.wvfs.fsu.edu:8000/stream",
  //   station_url: "https://wvfs.fsu.edu/",
  //   college_name: "Florida State University",
  //   public_private: "Public",
  //   city: "Tallahassee",
  //   state: "FL",
  //   station_image:
  //     "https://naccchart.com/wp-content/uploads/2022/03/wvfs-hi-res_350.jpg",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Florida_State_Seminoles_logo.svg/1200px-Florida_State_Seminoles_logo.svg.png",
  //   palette: ["#452d34", "#ede8db", "#b0a79a", "#b9929c"],
  // },
  // {
  //   id: 28,
  //   call_sign: "WUOG",
  //   broadcast_frequency: "90.5",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://stream.wuog.org:8000/stream",
  //   station_url: "http://wuog.org/",
  //   college_name: "University of Georgia",
  //   public_private: "Public",
  //   city: "Athens",
  //   state: "GA",
  //   station_image:
  //     "https://bloximages.newyork1.vip.townnews.com/redandblack.com/content/tncms/assets/v3/editorial/6/23/623c3abe-acc1-11e4-ace3-3f1d40ac2f84/54d2a4c19933a.image.jpg?resize=400%2C400",
  //   college_image:
  //     "https://content.sportslogos.net/logos/31/687/full/georgia_bulldogs_logo_secondary_2015_sportslogosnet-7979.png",
  //   palette: ["#040404", "#fafafa", "#af1531", "#848484"],
  // },
  // {
  //   id: 8,
  //   call_sign: "WXTJ",
  //   broadcast_frequency: "100.1",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/https://streams.wtju.net:8443/wtjx-opus-256.ogg",
  //   station_url: "https://www.wxtj.fm/",
  //   college_name: "University of Virginia",
  //   public_private: "Public",
  //   city: "Charlottesville",
  //   state: "VA",
  //   station_image:
  //     "https://upload.wikimedia.org/wikipedia/en/5/50/WXTJ-LP_2015.png",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Virginia_Cavaliers_logo.svg/800px-Virginia_Cavaliers_logo.svg.png",
  //   palette: ["#fb5714", "#0f3057", "#6a3b37", "#4a353c"],
  // },
  // {
  //   id: 9,
  //   call_sign: "WLUR",
  //   broadcast_frequency: "91.5",
  //   audio_url: "https://wlur.radioca.st/stream",
  //   station_url: "https://my.wlu.edu/wlur",
  //   college_name: "Washington and Lee University",
  //   public_private: "private",
  //   city: "Lexington",
  //   state: "VA",
  //   station_image:
  //     "https://static.mytuner.mobi/media/tvos_radios/kNFMSSg6QR.png",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/en/a/a8/W%26L_Generals.png",
  //   palette: ["#093698", "#e6e8ea", "#0e0e0e", "#799fc2"],
  // },
  // {
  //   id: 10,
  //   call_sign: "WTBU",
  //   broadcast_frequency: "89.3",
  //   audio_url: "https://cors-proxy.elfsight.com/http://wtbu.bu.edu:1800/",
  //   station_url: "https://sites.bu.edu/wtbu/",
  //   college_name: "Boston University",
  //   public_private: "private",
  //   city: "Boston",
  //   state: "MA",
  //   station_image:
  //     "https://i1.sndcdn.com/avatars-000070779841-52d5la-t500x500.jpg",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/en/thumb/1/15/Boston_University_Terriers_logo.svg/800px-Boston_University_Terriers_logo.svg.png",
  //   palette: ["#ba0613", "#070606", "#f1eff0", "#857c7c"],
  // },
  // {
  //   id: 11,
  //   call_sign: "WKDU",
  //   broadcast_frequency: "91.7",
  //   audio_url: "https://streams.wkdu.org/listen.mp3",
  //   station_url: "https://wkdu.org/",
  //   college_name: "Drexel University",
  //   public_private: "Private",
  //   city: "Philadelphia",
  //   state: "PA",
  //   station_image:
  //     "https://static.tuneyou.com/images/logos/500_500/81/10581/WKDUFM91.7.png",
  //   college_image:
  //     "https://drexel.edu/~/media/Images/identity/pageLogos/Drexel_Vertical-stacked_gold.ashx?la=en",
  //   palette: ["#fcc404", "#ffc404", "#ffc404", "#ffc404"],
  // },
  // {
  //   id: 4,
  //   call_sign: "WCBN",
  //   broadcast_frequency: "88.3",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://floyd.wcbn.org:8000/wcbn-hd.mp3",
  //   station_url: "http://www.wcbn.org/",
  //   college_name: "University of Michigan",
  //   public_private: "public",
  //   city: "Ann Arbor",
  //   state: "MI",
  //   station_image:
  //     "https://pbs.twimg.com/profile_images/1362092476375310338/ApUeoD54_400x400.jpg",
  //   college_image: "https://cdn.d1baseball.com/logos/teams/256/michigan.png",
  //   palette: ["#fcd304", "#fcdc04", "#fcd414", "#f4cc04"],
  // },
  // {
  //   id: 5,
  //   call_sign: "WUTK",
  //   broadcast_frequency: "90.3",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://streamer.cci.utk.edu:8000/wutk",
  //   station_url: "https://wutkradio.com/",
  //   college_name: "University of Tennessee, Knoxville",
  //   public_private: "Public",
  //   city: "Knoxville",
  //   state: "TN",
  //   station_image: "https://cdn-radiotime-logos.tunein.com/s23442g.png",
  //   college_image:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tennessee_Volunteers_logo.svg/1200px-Tennessee_Volunteers_logo.svg.png",
  //   palette: ["#fc8404", "#ff8404", "#ff8404", "#ff8404"],
  // },
  // {
  //   id: 12,
  //   call_sign: "WKNC",
  //   broadcast_frequency: "88.1",
  //   audio_url:
  //     "https://cors-proxy.elfsight.com/http://173.193.205.96:7430/stream",
  //   station_url: "https://wknc.org/",
  //   college_name: "North Carolina State University",
  //   public_private: "Public",
  //   city: "Raleigh",
  //   state: "NC",
  //   station_image:
  //     "https://storage.googleapis.com/stateless-wknc-org/sites/1/2020/10/wknc881-bow.png",
  //   college_image:
  //     "https://trademarks.ncsu.edu/wp-content/uploads/2016/04/cropped-brick-s-1.png",
  //   palette: ["#cb262e", "#0c0c0e", "#f6f3f3", "#ec8c9c"],
  // },
];

export default stations;
