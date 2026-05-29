# Documentation
- Class name: CropFace
- Category: facerestore_cf
- Output node: False
- Repo Ref: https://github.com/mav-rik/facerestore_cf

The CropFace node extracts and processes facial regions from input images. It uses a detection model to identify faces, then crops and aligns them according to predefined templates. The node’s main function is to prepare facial images for further processing (e.g., restoration or recognition) by isolating faces and normalizing them to size and orientation standards.

# Input types
## Required
- image
- The input image is essential for the node to perform face detection and cropping. It is the source from which facial regions are extracted and processed. Without a valid image, the node cannot perform its intended function.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- facedetection
- The facedetection parameter specifies the detection model used to identify faces in the input image. It affects the accuracy and efficiency of the face detection process, thereby influencing the quality of the cropped face images.
    - Comfy dtype: COMBO[retinaface_resnet50, retinaface_mobile0.25, YOLOv5l, YOLOv5n]
    - Python dtype: str

# Output types
- IMAGE
- The output includes cropped and aligned face images ready for further processing. These outputs represent the node’s face detection and image processing capabilities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CropFace:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'facedetection': (['retinaface_resnet50', 'retinaface_mobile0.25', 'YOLOv5l', 'YOLOv5n'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'crop_face'
    CATEGORY = 'facerestore_cf'

    def __init__(self):
        self.face_helper = None

    def crop_face(self, image, facedetection):
        device = model_management.get_torch_device()
        if self.face_helper is None:
            self.face_helper = FaceRestoreHelper(1, face_size=512, crop_ratio=(1, 1), det_model=facedetection, save_ext='png', use_parse=True, device=device)
        image_np = 255.0 * image.cpu().numpy()
        total_images = image_np.shape[0]
        out_images = np.ndarray(shape=(total_images, 512, 512, 3))
        next_idx = 0
        for i in range(total_images):
            cur_image_np = image_np[i, :, :, ::-1]
            original_resolution = cur_image_np.shape[0:2]
            if self.face_helper is None:
                return image
            self.face_helper.clean_all()
            self.face_helper.read_image(cur_image_np)
            self.face_helper.get_face_landmarks_5(only_center_face=False, resize=640, eye_dist_threshold=5)
            self.face_helper.align_warp_face()
            faces_found = len(self.face_helper.cropped_faces)
            if faces_found == 0:
                next_idx += 1
            if out_images.shape[0] < next_idx + faces_found:
                print(out_images.shape)
                print((next_idx + faces_found, 512, 512, 3))
                print('aaaaa')
                out_images = np.resize(out_images, (next_idx + faces_found, 512, 512, 3))
                print(out_images.shape)
            for j in range(faces_found):
                cropped_face_1 = self.face_helper.cropped_faces[j]
                cropped_face_2 = img2tensor(cropped_face_1 / 255.0, bgr2rgb=True, float32=True)
                normalize(cropped_face_2, (0.5, 0.5, 0.5), (0.5, 0.5, 0.5), inplace=True)
                cropped_face_3 = cropped_face_2.unsqueeze(0).to(device)
                cropped_face_4 = tensor2img(cropped_face_3, rgb2bgr=True, min_max=(-1, 1)).astype('uint8')
                cropped_face_5 = cv2.cvtColor(cropped_face_4, cv2.COLOR_BGR2RGB)
                out_images[next_idx] = cropped_face_5
                next_idx += 1
        cropped_face_6 = np.array(out_images).astype(np.float32) / 255.0
        cropped_face_7 = torch.from_numpy(cropped_face_6)
        return (cropped_face_7,)
```