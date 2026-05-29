# Documentation
- Class name: FaceFixerOpenCV
- Category: Mikey/Utils
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The FaceFixerOpenCV node aims to enhance and correct facial features in images using a series of face detection and image processing techniques. It utilizes OpenCV for face detection and applies advanced algorithms to refine and blend faces, ensuring that the corrected faces integrate seamlessly into the original image.

# Input types
## Required
- image
    - Input image is the object on which face correction operations will be performed. It serves as the foundation for all subsequent processing and analysis within the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_model
    - Base model is used for feature extraction and processing within the node. It plays a critical role in determining the quality and accuracy of facial feature enhancement.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - Variational Autoencoder (VAE) is used for encoding and decoding facial features. It is essential in the feature transformation and reconstruction processes within the node.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- positive_cond_base
    - Positive conditioning base, used to guide the facial feature enhancement process toward the desired outcome.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative_cond_base
    - Negative conditioning base, used to suppress certain facial features or characteristics during the enhancement process.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
## Optional
- seed
    - Random seed for random elements in the facial feature enhancement process. It ensures reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- face_img_resolution
    - Resolution for processing facial images. It affects the level of detail and computational load.
    - Comfy dtype: INT
    - Python dtype: int
- padding
    - Amount of padding applied to detected faces before processing. It helps preserve facial details at the edges.
    - Comfy dtype: INT
    - Python dtype: int
- scale_factor
    - Scaling factor used during face detection to adjust the size of the detection window.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_neighbors
    - Minimum number of neighbors required to retain a detected face. This is a parameter of the face detection algorithm.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - Denoising level applied to reconstructed facial features. It balances detail preservation and noise reduction.
    - Comfy dtype: FLOAT
    - Python dtype: float
- classifier
    - Classifier type used for face detection. It determines the algorithm and model applied to detect faces in the image.
    - Comfy dtype: STRING
    - Python dtype: str
- sampler_name
    - Sampler name used during VAE decoding. It affects the randomness and diversity of generated samples.
    - Comfy dtype: STRING
    - Python dtype: str
- scheduler
    - Scheduler used to control sampling progress during VAE decoding. It affects the interpolation and progression of sampling steps.
    - Comfy dtype: STRING
    - Python dtype: str
- cfg
    - Configuration parameters during the VAE sampling process. It fine-tunes the behavior of the sampling algorithm.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - Number of steps in the VAE sampling process. It determines the duration and thoroughness of sampling.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Output image with enhanced and corrected facial features. It is the result of node processing, representing the final state of the input image after facial enhancement.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class FaceFixerOpenCV:

    @classmethod
    def INPUT_TYPES(s):
        classifiers = ['animeface', 'combined', 'haarcascade_frontalface_default.xml', 'haarcascade_profileface.xml', 'haarcascade_frontalface_alt.xml', 'haarcascade_frontalface_alt2.xml', 'haarcascade_upperbody.xml', 'haarcascade_fullbody.xml', 'haarcascade_lowerbody.xml', 'haarcascade_frontalcatface.xml', 'hands']
        return {'required': {'image': ('IMAGE',), 'base_model': ('MODEL',), 'vae': ('VAE',), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'face_img_resolution': ('INT', {'default': 1024, 'min': 512, 'max': 2048}), 'padding': ('INT', {'default': 32, 'min': 0, 'max': 512}), 'scale_factor': ('FLOAT', {'default': 1.2, 'min': 0.1, 'max': 10.0, 'step': 0.1}), 'min_neighbors': ('INT', {'default': 8, 'min': 1, 'max': 100}), 'denoise': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'classifier': (classifiers, {'default': 'combined'}), 'sampler_name': (comfy.samplers.KSampler.SAMPLERS, {'default': 'dpmpp_2m_sde'}), 'scheduler': (comfy.samplers.KSampler.SCHEDULERS, {'default': 'karras'}), 'cfg': ('FLOAT', {'default': 7.0, 'min': 0.0, 'max': 1000.0, 'step': 0.1}), 'steps': ('INT', {'default': 30, 'min': 1, 'max': 1000})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'run'
    CATEGORY = 'Mikey/Utils'

    def calculate_iou(self, box1, box2):
        """
        Calculate the Intersection over Union (IoU) of two bounding boxes.

        Parameters:
        box1, box2: The bounding boxes, each defined as [x, y, width, height]

        Returns:
        iou: Intersection over Union as a float.
        """
        (x1_min, y1_min, x1_max, y1_max) = (box1[0], box1[1], box1[0] + box1[2], box1[1] + box1[3])
        (x2_min, y2_min, x2_max, y2_max) = (box2[0], box2[1], box2[0] + box2[2], box2[1] + box2[3])
        intersect_x_min = max(x1_min, x2_min)
        intersect_y_min = max(y1_min, y2_min)
        intersect_x_max = min(x1_max, x2_max)
        intersect_y_max = min(y1_max, y2_max)
        intersect_area = max(0, intersect_x_max - intersect_x_min) * max(0, intersect_y_max - intersect_y_min)
        box1_area = (x1_max - x1_min) * (y1_max - y1_min)
        box2_area = (x2_max - x2_min) * (y2_max - y2_min)
        union_area = box1_area + box2_area - intersect_area
        iou = intersect_area / union_area if union_area != 0 else 0
        return iou

    def detect_faces(self, image, classifier, scale_factor, min_neighbors):
        try:
            import cv2
        except ImportError:
            raise Exception('OpenCV is not installed. Please install it using "pip install opencv-python"')
        if classifier == 'animeface':
            p = os.path.dirname(os.path.realpath(__file__))
            p = os.path.join(p, 'haar_cascade_models/animeface.xml')
        elif classifier == 'hands':
            p = os.path.dirname(os.path.realpath(__file__))
            p = os.path.join(p, 'haar_cascade_models/hand_gesture.xml')
        else:
            p = cv2.data.haarcascades + classifier
        face_cascade = cv2.CascadeClassifier(p)
        image_np = np.clip(255.0 * image.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
        gray = cv2.cvtColor(image_np, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, scaleFactor=scale_factor, minNeighbors=min_neighbors, minSize=(32, 32))
        return faces

    def combo_detection(self, image, scale_factor, min_neighbors):
        front_faces = self.detect_faces(image, 'haarcascade_frontalface_default.xml', scale_factor, min_neighbors)
        profile_faces = self.detect_faces(image, 'haarcascade_profileface.xml', scale_factor, min_neighbors)
        anime_faces = self.detect_faces(image, 'animeface', scale_factor, min_neighbors)
        if front_faces == () and profile_faces == () and (anime_faces == ()):
            return front_faces
        if front_faces == () and profile_faces != () and (anime_faces == ()):
            return profile_faces
        if front_faces != () and profile_faces == () and (anime_faces == ()):
            return front_faces
        if front_faces == () and profile_faces == () and (anime_faces != ()):
            return anime_faces
        arrays = []
        if front_faces != ():
            arrays.append(front_faces)
        if profile_faces != ():
            arrays.append(profile_faces)
        if anime_faces != ():
            arrays.append(anime_faces)
        combined_faces = np.concatenate(arrays, axis=0)
        iou_threshold = 0.2
        faces = []
        for face in combined_faces:
            if len(faces) == 0:
                faces.append(face)
            else:
                iou = [self.calculate_iou(face, f) for f in faces]
                if max(iou) < iou_threshold:
                    faces.append(face)
        return faces

    def run(self, image, base_model, vae, positive_cond_base, negative_cond_base, seed, face_img_resolution=768, padding=8, scale_factor=1.2, min_neighbors=6, denoise=0.25, classifier='haarcascade_frontalface_default.xml', sampler_name='dpmpp_3m_sde_gpu', scheduler='exponential', cfg=7.0, steps=30):
        image_scaler = ImageScale()
        vaeencoder = VAEEncode()
        vaedecoder = VAEDecode()
        if classifier == 'combined':
            faces = self.combo_detection(image, scale_factor, min_neighbors)
        else:
            faces = self.detect_faces(image, classifier, scale_factor, min_neighbors)
        if faces == ():
            return (image,)
        result = image.clone()
        for (x, y, w, h) in faces:
            x -= padding
            y -= padding
            w += padding * 2
            h += padding * 2
            x = max(0, x)
            y = max(0, y)
            w = min(w, image.shape[2] - x)
            h = min(h, image.shape[1] - y)
            og_crop = image[:, y:y + h, x:x + w]
            (org_width, org_height) = (og_crop.shape[2], og_crop.shape[1])
            crop = image_scaler.upscale(og_crop, 'lanczos', face_img_resolution, face_img_resolution, 'center')[0]
            samples = vaeencoder.encode(vae, crop)[0]
            samples = common_ksampler(base_model, seed, steps, cfg, sampler_name, scheduler, positive_cond_base, negative_cond_base, samples, start_step=int((1 - steps * denoise) // 1), last_step=steps, force_full_denoise=False)[0]
            crop = vaedecoder.decode(vae, samples)[0]
            crop = image_scaler.upscale(crop, 'lanczos', org_width, org_height, 'center')[0]
            feather = crop.shape[2] // 8
            mask = torch.ones(1, crop.shape[1], crop.shape[2], crop.shape[3])
            for t in range(feather):
                mask[:, t:t + 1, :] *= 1.0 / feather * (t + 1)
            for t in range(feather):
                mask[:, :, t:t + 1] *= 1.0 / feather * (t + 1)
            for t in range(feather):
                right_edge_start = crop.shape[2] - feather + t
                mask[:, :, right_edge_start:right_edge_start + 1] *= 1.0 - 1.0 / feather * (t + 1)
            for t in range(feather):
                bottom_edge_start = crop.shape[1] - feather + t
                mask[:, bottom_edge_start:bottom_edge_start + 1, :] *= 1.0 - 1.0 / feather * (t + 1)
            crop = crop * mask
            original_area = result[:, y:y + h, x:x + w]
            inverse_mask = 1 - mask
            original_area = original_area * inverse_mask
            blended_face = original_area + crop
            result[:, y:y + h, x:x + w] = blended_face
        return (result,)
```