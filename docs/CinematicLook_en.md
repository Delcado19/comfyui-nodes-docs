# Documentation
- Class name: CinematicLook
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The CinematicLook node aims to enhance the visual appeal of an image by applying various stylized adjustments, mimicking the high-quality look commonly found in films and professional photography. This node uses color grading and other visual effects to transform ordinary images into ones with a cinematic texture, suitable for a wide range of uses from professional portfolios to social media posts.

# Input types
## Required
- image
    - The image parameter is the source material processed by the node. It is crucial because it serves as the foundation for all subsequent transformations and enhancements. The quality and characteristics of the input image directly affect the final output, influencing the overall aesthetic and visual impact.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- look
    - The look parameter determines the stylistic direction of the image transformation. It is critical in establishing the final visual tone and mood of the processed image. Different looks cater to various creative visions and applications, allowing for customized results that align with the desired aesthetic.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- result_img
    - The result_img output is the transformed image with the cinematic look applied. It represents the outcome of the node's processing, containing the stylistic enhancements and adjustments made to the input image. This is the final product ready for use or further processing in a creative workflow.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class CinematicLook:

    @classmethod
    def INPUT_TYPES(s):
        s.haldclut_files = read_cluts()
        s.file_names = [os.path.basename(f) for f in s.haldclut_files]
        return {'required': {'image': ('IMAGE', {'default': None}), 'look': (['modern', 'retro', 'clipped', 'broadcast', 'black and white', 'black and white - warm'],)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('result_img',)
    FUNCTION = 'cinematic_look'
    CATEGORY = 'Mikey/Image'

    def apply_haldclut(self, image, hald_clut, gamma_correction):
        hald_img = Image.open(self.haldclut_files[self.file_names.index(hald_clut)])
        img = tensor2pil(image)
        if gamma_correction == 'True':
            corrected_img = gamma_correction_pil(img, 1.0 / 2.2)
        else:
            corrected_img = img
        filtered_image = apply_hald_clut(hald_img, corrected_img).convert('RGB')
        return filtered_image

    @apply_to_batch
    def cinematic_look(self, image, look):
        if look == 'modern':
            image = self.apply_haldclut(image, 'modern.png', 'False')
        elif look == 'retro':
            image = self.apply_haldclut(image, 'retro.png', 'False')
        elif look == 'clipped':
            image = self.apply_haldclut(image, 'clipped.png', 'False')
        elif look == 'broadcast':
            image = self.apply_haldclut(image, 'broadcast.png', 'False')
        elif look == 'black and white':
            image = self.apply_haldclut(image, 'bw.png', 'False')
        elif look == 'black and white - warm':
            image = self.apply_haldclut(image, 'bw_warm.png', 'False')
        p = os.path.dirname(os.path.realpath(__file__))
        if look in ['black and white']:
            noise_img = os.path.join(p, 'noise_bw.png')
        else:
            noise_img = os.path.join(p, 'noise.png')
        noise = Image.open(noise_img)
        IO = ImageOverlay()
        image = pil2tensor(image)
        noise = pil2tensor(noise)
        if look == 'modern':
            image = IO.overlay(image, noise, 0.3)[0]
        if look == 'retro':
            image = IO.overlay(image, noise, 0.4)[0]
        if look == 'clipped':
            image = IO.overlay(image, noise, 0.25)[0]
        if look == 'broadcast':
            image = IO.overlay(image, noise, 0.3)[0]
        if look == 'black and white':
            image = IO.overlay(image, noise, 0.25)[0]
        if look == 'black and white - warm':
            image = IO.overlay(image, noise, 0.25)[0]
        return image
```