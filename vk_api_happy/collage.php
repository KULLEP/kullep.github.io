 <?php
/**
* This class is used to create an image collage from
* an array of image links.
*
* @author Tully Rankin
* @website http://www.TullyRankin.com
*/


class Collage {

    public $images = array();
    public $height;
    public $width;
    public $imgBuf = array();
    public $imgOut;
    public $errors = array();
    public function __construct(Array $images, $height=500, $width=500)
    {
        try {

            if (empty($images))
                throw new Exception('Images can not be empty.');

            $this->images = $images;
            $this->height = $height;
            $this->width = $width;

            $iTmp = "";

            $this->_addImagesToBuffer();
            $this->imgOut = imagecreatetruecolor($this->width, $this->height);
        } catch (Exception $e) {
            $this->errors[] = $e;
        }
    }
    public function execute()
    {
        $tmpHeight = 0;
        $tmpWidth = 0;

        try {
            do {
                foreach($this->imgBuf as $image) {
                    if ($tmpWidth <= $this->width) { 
                        @imagecopy($this->imgOut, $image, $tmpWidth, $tmpHeight, 0, 0, imagesx($image), imagesy($image));
                        @imagedestroy($image);
                        $tmpWidth += 100;
                    } else {
                        $tmpWidth = 0;
                        @imagecopy($this->imgOut, $image, $tmpWidth, $tmpHeight, 0, 0, imagesx($image), imagesy($image));
                        @imagedestroy($image);
                        $tmpWidth += 100;
                        $tmpHeight += 100;
                    }
                }
                $this->_addImagesToBuffer();;
            } while($tmpHeight <= $this->height);
        } catch (Exception $e) {
            $this->errors[] = $e;
        }
    }

    /**
    * Saves the image to a file
    *
    * @param string $name The name of the image.
    * @param string $type The image type to save as.
    */
    public function saveFile($name, $type="jpeg")
    {
        try {
            ob_start();
            switch($type) {
                case "png":
                    @imagepng($this->imgOut);
                    break;
                case "jpg":
                case "jpeg":
                    @imagejpeg($this->imgOut);
                    break;
                case "gif":
                    @imagegif($this->imgOut);
                    break;
                default:
                    throw new Exception("Unknown image type");
            }
            $contents = ob_get_contents();
            ob_end_clean();
            file_put_contents($name, $contents);
        } catch (Exception $e) {
            $this->errors[] = $e;
        }
    }

    /*
    * Creates an image from each image given in the constructor.
    * Adds it to public imgBuf array
    */
    protected function _addImagesToBuffer()
    {
        $this->imgBuf = array();
        foreach($this->images as $imageSrc) {
            $iTmp = imagecreatefromjpeg($imageSrc);
            array_push($this->imgBuf, $iTmp);
        }

    }
}
 