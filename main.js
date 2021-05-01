let mainCanvas = document.getElementById('mainCanvas');
let backgroundCanvas = document.createElement("canvas");
let frontCanvas = document.createElement("canvas");

let mainContext = mainCanvas.getContext('2d');
let backgroundContext = backgroundCanvas.getContext('2d');
let frontContext = frontCanvas.getContext('2d');
let c=document.getElementById("my-canvas");
let ctx=c.getcontext("2d");

let loadImage=(src,callback)=>{
let img=document.createElement("img");
img.onload=()=>callback(img);
img.src=src;
};

let imagepath=(frameNumber)=>{
    return"/images/"+ animation+ "/"+ frameNumber +"1.png";
};
let frames={
    idle:[1,2,3,4,5,6,7,8],
    kick:[1,2,3,4,5,6,7],
    punch:[1,2,3,4,5,6,7],
};


let loadImages =(callback)=>{
    let images={idle:[],kick:[],punch:[]};
    let imagesToLoad=0;

    ["idle","kick","punch"].forEach((animation)=>{
        let animationFrames=frames[animation];
        imagesToLoad=imagesToLoad+animationFrames.length;


        animationFrames.forEach((frameNumber)=>{
        let path=imagePath(frameNumber,animation);
        

        loadImage(path, (image)=>{
            images[framenumber-1]=image;
            imagesToLoad=imagesToLoad-1;

            if(imagesToLoad===0){
                callback(images);
            }
        });
    });
});

};

let animate=(ctx,images,animation,callback)=>{
    images[animation].forEach((image,index)=>{
        setTimeout(()=>{
            ctx.clearRect(0,0,500,500);
            ctx.drawImage(Image, 0,0,500,500);
        }, index*100);

    });

    setTimeout(callback,images.length*100);
};

loadImages((images)=>{
    animate(ctx,images, ()=>{
        console.log("Done!");
    });
    
});
