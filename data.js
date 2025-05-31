var APP_DATA = {
  "scenes": [
    {
      "id": "0-scene1",
      "name": "Scene1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.004163807360638927,
        "pitch": 0.10212072843085096,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -2.28443849015831,
          "pitch": -0.07905364700579298,
          "rotation": 4.71238898038469,
          "target": "1-scene2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-scene2",
      "name": "Scene2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.1953077102442471,
        "pitch": 0.08934577640198427,
        "fov": 1.222445190334001
      },
      "linkHotspots": [
        {
          "yaw": -0.8981292809800152,
          "pitch": 0.3451366905305644,
          "rotation": 0.7853981633974483,
          "target": "0-scene1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
