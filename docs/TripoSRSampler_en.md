# Documentation
- Class name: TripoSRSampler
- Category: Flowty TripoSR
- Output node: False
- Repo Ref: https://github.com/flowtyone/ComfyUI-Flowty-TripoSR

The TripoSRSampler class leverages deep learning models to interpret scene code and extract geometric details, facilitating the generation of 3D meshes from 2D images. It converts visual data into structured representations, enabling applications across computer vision, graphics rendering, and other fields.

# Input types
## Required
- model
    - Model parameters are critical for TripoSRSampler; they include a trained neural network that converts 2D images to 3D meshes. They form the backbone of the process and determine the quality and accuracy of the final output.
    - Comfy dtype: TRIPOSR_MODEL
    - Python dtype: torch.nn.Module
- reference_image
    - Reference images are the primary input for the 3D mesh generation process. For the model, they are essential for interpreting and extracting the necessary geometric information to create an accurate scene representation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- geometry_resolution
    - Geometric resolution is a key parameter that affects the level of detail in the generated 3D mesh. Higher resolution yields more complex and fine-grained output, which is crucial for applications requiring high precision.
    - Comfy dtype: INT
    - Python dtype: int
- threshold
    - The threshold parameter plays an important role in determining the contrast and clarity of the extracted 3D structure. It influences how the model distinguishes different elements in the scene, affecting the final visual result.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- reference_mask
    - When provided, a reference mask specifies regions of interest in the image, aiding the refinement of 3D mesh generation. It helps the model focus on relevant parts of the scene, improving output accuracy.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- mesh
    - The output mesh is the tangible result of the 3D sampling process, representing the conversion from input image to geometric structure. It is a key component for further analysis, visualization, and application across various domains.
    - Comfy dtype: MESH
    - Python dtype: trimesh.Trimesh

# Usage tips
- Infra type: GPU

# Source code
```
class TripoSRSampler:

    def __init__(self):
        self.initialized_model = None

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('TRIPOSR_MODEL',), 'reference_image': ('IMAGE',), 'geometry_resolution': ('INT', {'default': 256, 'min': 128, 'max': 12288}), 'threshold': ('FLOAT', {'default': 25.0, 'min': 0.0, 'step': 0.01})}, 'optional': {'reference_mask': ('MASK',)}}
    RETURN_TYPES = ('MESH',)
    FUNCTION = 'sample'
    CATEGORY = 'Flowty TripoSR'

    def sample(self, model, reference_image, geometry_resolution, threshold, reference_mask=None):
        device = get_torch_device()
        if not torch.cuda.is_available():
            device = 'cpu'
        image = reference_image[0]
        if reference_mask is not None:
            mask = reference_mask[0].unsqueeze(2)
            image = torch.cat((image, mask), dim=2).detach().cpu().numpy()
        else:
            image = image.detach().cpu().numpy()
        image = Image.fromarray(np.clip(255.0 * image, 0, 255).astype(np.uint8))
        if reference_mask is not None:
            image = fill_background(image)
        image = image.convert('RGB')
        scene_codes = model([image], device)
        meshes = model.extract_mesh(scene_codes, resolution=geometry_resolution, threshold=threshold)
        return ([meshes[0]],)
```