lipstick_x = 0;
lipstick_y = 0;

function preload()
{
    lipstick = loadImage("https://i.postimg.cc/N0DWVzWR/lipstick.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(lipstick, lipstick_x, lipstick_y, 60, 45);
}

function take_snapshot()
{
    save("filter.png");
}

function modelLoaded()
{
    console.log("Posenet is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipstick_x = results[0].pose.nose.x - 30;
        lipstick_y = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}