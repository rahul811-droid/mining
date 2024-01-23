
    // import multer
    import multer from "multer";

    // Configure storage with filename and location 
    const storage = multer.diskStorage({
        destination:(req,res,cb)=>{
            cb(null,'./uploads/');
        },
        filename: (req, file, cb) => {
            cb(
              null,
              new Date().toISOString().replace(/:/g, '_') + file.originalname
            );
          }
 } )


    export const upload = multer({
        storage:storage,
    })

    
