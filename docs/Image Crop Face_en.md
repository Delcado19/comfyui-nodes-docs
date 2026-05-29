# Documentation
- Class name: WAS_Image_Crop_Face
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Crop_Face node is designed to intelligently detect and crop faces in images. It uses pre-defined cascade classifiers to locate faces and allows padding adjustments around the detected face area. This node can handle various face detection scenarios and returns a cropped face image along with the original image size and crop coordinates.

# Input types
## Required
- image
    - Input image, from which the face will be detected and cropped. This is a mandatory parameter because the node's operation essentially depends on the presence of an image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- crop_padding_factor
    - Padding factor determines the amount of padding around the detected face. A padding factor of 0.25 means using 25% of the face size as padding. This is optional and defaults to 0.25 if not provided.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cascade_xml
    - Cascade XML file for face detection. If no face is detected using the first XML file, the node will attempt multiple cascade files. This parameter is optional; if not specified, the node will use the default cascade file.
    - Comfy dtype: COMBO[lbpcascade_animeface.xml, haarcascade_frontalface_default.xml, haarcascade_frontalface_alt.xml, haarcascade_frontalface_alt2.xml, haarcascade_frontalface_alt_tree.xml, haarcascade_profileface.xml, haarcascade_upperbody.xml]
    - Python dtype: str

# Output types
- cropped_face_image
    - The output is the cropped face image, resized and padded as needed, extracted from the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop_data
    - This output provides metadata about the face crop, including the original size of the face in the image and the coordinates of the crop box.
    - Comfy dtype: COMBO[original_size, (left, top, right, bottom)]
    - Python dtype: Tuple[Tuple[int, int], Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
