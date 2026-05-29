# Documentation
- Class name: CreateQRCodeNode
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The CreateQRCodeNode class is designed to generate QR codes from text input. It encapsulates the functionality of converting strings into QR code images, following specified parameters for size, version, error correction level, box size, and border. This node plays a key role in creating QR codes for visual representation of information required in various applications.

# Input types
## Required
- text
    - The 'text' parameter is critical as it is the source of information to be encoded into the QR code. It can be a multi-line string, allowing for more complex data inclusion.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- size
    - The 'size' parameter determines the dimensions of the QR code image. It is important as it affects the scale and readability of the QR code, with the default value set to ensure a balance between size and detail.
    - Comfy dtype: INT
    - Python dtype: int
- qr_version
    - The 'qr_version' parameter controls the version of the QR code, which corresponds to its error correction capability and data storage capacity. It is essential for ensuring the QR code can handle the amount of data provided.
    - Comfy dtype: INT
    - Python dtype: int
- error_correction
    - The 'error_correction' parameter sets the error correction level of the QR code. It is critical as it defines the QR code's resilience to damage and readability at different distances.
    - Comfy dtype: COMBO['L', 'M', 'Q', 'H']
    - Python dtype: str
- box_size
    - The 'box_size' parameter specifies the size of each box in the QR grid. It is important as it affects the visual appearance of the QR code and the precision required to scan it.
    - Comfy dtype: INT
    - Python dtype: int
- border
    - The 'border' parameter sets the width of the border around the QR code. It is important as it provides a clear boundary between the QR code and its surrounding area, enhancing its scannability.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The 'IMAGE' output is the resulting QR code image generated from the input parameters. It is important as it is the primary deliverable of the node, representing the encoded information in a visual format.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CreateQRCodeNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'text': ('STRING', {'multiline': True}), 'size': ('INT', {'default': 512, 'min': 64, 'max': 4096, 'step': 64}), 'qr_version': ('INT', {'default': 1, 'min': 1, 'max': 40, 'step': 1}), 'error_correction': (['L', 'M', 'Q', 'H'], {'default': 'H'}), 'box_size': ('INT', {'default': 10, 'min': 1, 'max': 100, 'step': 1}), 'border': ('INT', {'default': 4, 'min': 0, 'max': 100, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'create_qr_code'
    CATEGORY = 'Masquerade Nodes'

    def create_qr_code(self, text, size, qr_version, error_correction, box_size, border):
        ensure_package('qrcode')
        import qrcode
        if error_correction == 'L':
            error_level = qrcode.constants.ERROR_CORRECT_L
        elif error_correction == 'M':
            error_level = qrcode.constants.ERROR_CORRECT_M
        elif error_correction == 'Q':
            error_level = qrcode.constants.ERROR_CORRECT_Q
        else:
            error_level = qrcode.constants.ERROR_CORRECT_H
        qr = qrcode.QRCode(version=qr_version, error_correction=error_level, box_size=box_size, border=border)
        qr.add_data(text)
        qr.make(fit=True)
        img = qr.make_image(fill_color='black', back_color='white')
        img = img.resize((size, size))
        tensor = torch.from_numpy(np.array(img))
        return (tensor2rgb(tensor.unsqueeze(0)),)
```