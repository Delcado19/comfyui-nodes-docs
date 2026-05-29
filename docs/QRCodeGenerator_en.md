
# Documentation
- Class name: QRCodeGenerator
- Category: Art Venture/Utils
- Output node: False

The QRCodeGenerator node is used to generate QR codes based on specified text input, and provides various customization options such as size, version, error correction level, module size, and border size. It encapsulates the QR code creation process, making it easy to apply in various scenarios where information needs to be embedded into QR code format.

# Input types
## Required
- text
    - The 'text' parameter is the input string to be encoded into a QR code. This parameter is crucial because it determines the content represented by the QR code.
    - Comfy dtype: STRING
    - Python dtype: str
- size
    - Specifies the final size of the generated QR code image (in pixels). It affects the visibility and scannability of the QR code.
    - Comfy dtype: INT
    - Python dtype: int
- qr_version
    - Determines the version of the QR code, indirectly controlling the size and amount of data that can be encoded.
    - Comfy dtype: INT
    - Python dtype: int
- error_correction
    - Sets the error correction level of the QR code, affecting its damage resistance and the amount of data that can be recovered.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- box_size
    - Defines the size of each module (or pixel) in the QR code, affecting the overall size of the QR code.
    - Comfy dtype: INT
    - Python dtype: int
- border
    - Specifies the width of the border around the QR code. A larger border can improve scannability but increases the overall size of the QR code.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is the generated QR code image, which can be directly used in various applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtillQRCodeGenerator:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "text": ("STRING", {"multiline": True}),
                "size": ("INT", {"default": 512, "min": 64, "max": 4096, "step": 64}),
                "qr_version": ("INT", {"default": 1, "min": 1, "max": 40, "step": 1}),
                "error_correction": (["L", "M", "Q", "H"], {"default": "H"}),
                "box_size": ("INT", {"default": 10, "min": 1, "max": 100, "step": 1}),
                "border": ("INT", {"default": 4, "min": 0, "max": 100, "step": 1}),
            },
        }

    RETURN_TYPES = ("IMAGE",)
    FUNCTION = "create_qr_code"
    CATEGORY = "Art Venture/Utils"

    def create_qr_code(self, text, size, qr_version, error_correction, box_size, border):
        ensure_package("qrcode", "qrcode[pil]")
        import qrcode

        if error_correction == "L":
            error_level = qrcode.constants.ERROR_CORRECT_L
        elif error_correction == "M":
            error_level = qrcode.constants.ERROR_CORRECT_M
        elif error_correction == "Q":
            error_level = qrcode.constants.ERROR_CORRECT_Q
        else:
            error_level = qrcode.constants.ERROR_CORRECT_H

        qr = qrcode.QRCode(version=qr_version, error_correction=error_level, box_size=box_size, border=border)
        qr.add_data(text)
        qr.make(fit=True)
        img = qr.make_image(fill_color="black", back_color="white")
        img = img.resize((size, size)).convert("RGB")

        return (pil2tensor(img),)

```
