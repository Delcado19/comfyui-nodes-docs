# Documentation
- Class name: BuildFaceModel
- Category: 🌌 ReActor
- Output node: True
- Repo Ref: https://github.com/Gourieff/comfyui-reactor-node.git

This node aims to synthesize a face model from a set of input images, utilizing advanced computer vision techniques to detect, analyze, and fuse facial features. It aims to create a composite representation of the input faces, which can be used for various applications such as recognition, authentication, or visualization. This node emphasizes the integration of image processing and machine learning techniques to achieve advanced face synthesis.

# Input types
## Required
- images
    - The 'image' parameter is crucial for the face model building process. It serves as the main input, providing the visual data needed for face detection and feature extraction. The quality and quantity of images directly affect the accuracy and detail of the synthesized face model.
    - Comfy dtype: COMBO[string]
    - Python dtype: List[Image.Image]
- face_model_name
    - The 'face_model_name' parameter is essential for identifying and organizing the output face models. It serves as a unique identifier for each model, facilitating subsequent retrieval and management of synthesized face data.
    - Comfy dtype: string
    - Python dtype: str
- compute_method
    - The 'compute_method' parameter determines the technique used to fuse multiple facial features into a single composite model. It affects the final representation of the face model, and different methods may lead to varying levels of detail and accuracy.
    - Comfy dtype: COMBO[string]
    - Python dtype: str
## Optional
- save_mode
    - The 'save_mode' parameter determines whether the synthesized face model is saved to the output directory. It allows users to control the node's output, deciding whether to retain the generated models for future use or simply discard them after processing.
    - Comfy dtype: COMBO[boolean]
    - Python dtype: bool

# Output types
- face_model_name
    - The output 'face_model_name' represents the unique identifier of the synthesized face model. It is key information for users to reference and use the generated model in subsequent processes or applications.
    - Comfy dtype: string
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class BuildFaceModel:

    def __init__(self):
        self.output_dir = FACE_MODELS_PATH

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'save_mode': ('BOOLEAN', {'default': True, 'label_off': 'OFF', 'label_on': 'ON'}), 'face_model_name': ('STRING', {'default': 'default'}), 'compute_method': (['Mean', 'Median', 'Mode'], {'default': 'Mean'})}}
    RETURN_TYPES = ()
    FUNCTION = 'blend_faces'
    OUTPUT_NODE = True
    CATEGORY = '🌌 ReActor'

    def build_face_model(self, image: Image.Image, det_size=(640, 640)):
        if image is None:
            error_msg = 'Please load an Image'
            logger.error(error_msg)
            return error_msg
        image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)
        face_model = analyze_faces(image, det_size)
        if len(face_model) == 0:
            det_size_half = half_det_size(det_size)
            face_model = analyze_faces(image, det_size_half)
        if face_model is not None and len(face_model) > 0:
            return face_model[0]
        else:
            no_face_msg = 'No face found, please try another image'
            logger.error(no_face_msg)
            return no_face_msg

    def blend_faces(self, images, save_mode, face_model_name, compute_method):
        if save_mode and images is not None:
            faces = []
            embeddings = []
            images_list: List[Image.Image] = batch_tensor_to_pil(images)
            apply_logging_patch(1)
            n = len(images_list)
            import logging
            logging.StreamHandler.terminator = ' '
            for (i, image) in enumerate(images_list):
                logger.status(f'Building Face Model {i + 1} of {n}...')
                face = self.build_face_model(image)
                print(f'{int((i + 1) / n * 100)}%')
                if isinstance(face, str):
                    continue
                faces.append(face)
                embeddings.append(face.embedding)
            logging.StreamHandler.terminator = '\n'
            if len(faces) > 0:
                compute_method_name = 'Mean' if compute_method == 0 else 'Median' if compute_method == 1 else 'Mode'
                logger.status(f'Blending with Compute Method {compute_method_name}...')
                blended_embedding = np.mean(embeddings, axis=0) if compute_method == 'Mean' else np.median(embeddings, axis=0) if compute_method == 'Median' else stats.mode(embeddings, axis=0)[0].astype(np.float32)
                blended_face = Face(bbox=faces[0].bbox, kps=faces[0].kps, det_score=faces[0].det_score, landmark_3d_68=faces[0].landmark_3d_68, pose=faces[0].pose, landmark_2d_106=faces[0].landmark_2d_106, embedding=blended_embedding, gender=faces[0].gender, age=faces[0].age)
                if blended_face is not None:
                    face_model_path = os.path.join(FACE_MODELS_PATH, face_model_name + '.safetensors')
                    save_face_model(blended_face, face_model_path)
                    logger.status('--Done!--')
                    return face_model_name
                else:
                    no_face_msg = 'Something went wrong, please try another set of images'
                    logger.error(no_face_msg)
                    return face_model_name
            logger.status('--Done!--')
        if images is None:
            logger.error('Please provide `images`')
        return face_model_name
```