
# Documentation
- Class name: SaltScheduledShapeTransformation
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltScheduledShapeTransformation node aims to perform scheduled shape transformations on images. It can dynamically adjust the shape of an image over a series of frames based on a schedule of various predefined parameters (such as size, position, and rotation). This function can be used to create complex animation effects or perform frame-by-frame image processing.

# Input types
## Required
- max_frames
    - Specifies the maximum number of frames in the shape transformation sequence. This determines the duration of the entire transformation process.
    - Comfy dtype: INT
    - Python dtype: int
- image_width
    - The width of the output image. This defines the horizontal resolution of the final generated image.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The height of the output image. This defines the vertical resolution of the final generated image.
    - Comfy dtype: INT
    - Python dtype: int
- initial_width
    - The initial width of the shape before the transformation begins. This is the starting point of the shape transformation.
    - Comfy dtype: INT
    - Python dtype: int
- initial_height
    - The initial height of the shape before the transformation begins. This is the starting point of the shape transformation.
    - Comfy dtype: INT
    - Python dtype: int
- initial_x_coord
    - The x-coordinate of the initial position of the shape. This determines the initial horizontal position of the shape in the frame.
    - Comfy dtype: INT
    - Python dtype: int
- initial_y_coord
    - The y-coordinate of the initial position of the shape. This determines the initial vertical position of the shape in the frame.
    - Comfy dtype: INT
    - Python dtype: int
- initial_rotation
    - The initial rotation angle of the shape, in degrees. This sets the initial orientation of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shape_mode
    - Defines the mode or type of shape to transform, allowing various geometric shapes. This determines the basic shape used in the transformation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- shape
    - Optional. The specific shape to be transformed (if applicable). This allows using a custom shape for the transformation.
    - Comfy dtype: MASK
    - Python dtype: str
- width_schedule
    - Defines a schedule list for width transformation over time. This controls how the shape width changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- height_schedule
    - Defines a schedule list for height transformation over time. This controls how the shape height changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- x_schedule
    - Defines a schedule list for x-coordinate transformation over time. This controls how the horizontal position of the shape changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- y_schedule
    - Defines a schedule list for y-coordinate transformation over time. This controls how the vertical position of the shape changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- rotation_schedule
    - Defines a schedule list for rotation angle transformation over time. This controls how the shape rotation changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- images
    - The resulting image of the scheduled shape transformation. This is a series of image frames that have been transformed.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltScheduledShapeTransformation:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "max_frames": ("INT", {"min": 1}),
                "image_width": ("INT", {"default": 512, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "image_height": ("INT", {"default": 512, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "initial_width": ("INT", {"default": 256, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "initial_height": ("INT", {"default": 256, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "initial_x_coord": ("INT", {"default": 256, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "initial_y_coord": ("INT", {"default": 256, "min": -MAX_RESOLUTION, "max": MAX_RESOLUTION}),
                "initial_rotation": ("FLOAT", {"min": 0, "max": 360, "step": 0.01}),
                "shape_mode": (["circle", "diamond", "triangle", "square", "hexagon", "octagon"], ),
            },
            "optional": {
                "shape": ("MASK", ),
                "width_schedule": ("LIST", ),
                "height_schedule": ("LIST", ),
                "x_schedule": ("LIST", ),
                "y_schedule": ("LIST", ),
                "rotation_schedule": ("LIST", ),
            }
        }

    RETURN_TYPES = ("IMAGE", )
    RETURN_NAMES = ("images", )
    FUNCTION = "transform_shape"
    CATEGORY = "SALT/Scheduling/Image"

    def apply_multiply_operation(self, initial_value, schedule, frame_idx):
        factor = schedule[min(frame_idx, len(schedule) - 1)]
        return initial_value * factor

    def draw_shape(self, draw, shape_mode, center, width, height):
        if shape_mode == "circle":
            draw.ellipse([(center[0] - width / 2, center[1] - height / 2), (center[0] + width / 2, center[1] + height / 2)], fill="white")
        elif shape_mode == "square":
            draw.rectangle([(center[0] - width / 2, center[1] - height / 2), (center[0] + width / 2, center[1] + height / 2)], fill="white")
        elif shape_mode == "diamond":
            half_width = width / 2
            half_height = height / 2
            draw.polygon([center[0], center[1] - half_height, center[0] + half_width, center[1], center[0], center[1] + half_height, center[0] - half_width, center[1]], fill="white")
        elif shape_mode == "triangle":
            draw.polygon([(center[0], center[1] - height / 2), (center[0] + width / 2, center[1] + height / 2), (center[0] - width / 2, center[1] + height / 2)], fill="white")
        elif shape_mode == "hexagon":
            angle = 2 * np.pi / 6
            points = [(center[0] + math.cos(i * angle) * width / 2, center[1] + math.sin(i * angle) * height / 2) for i in range(6)]
            draw.polygon(points, fill="white")
        elif shape_mode == "octagon":
            angle = 2 * np.pi / 8
            points = [(center[0] + math.cos(i * angle) * width / 2, center[1] + math.sin(i * angle) * height / 2) for i in range(8)]
            draw.polygon(points, fill="white")

    def transform_shape(self, max_frames, image_width, image_height, initial_width, initial_height, initial_x_coord, initial_y_coord, initial_rotation, shape_mode, shape=None, width_schedule=[1.0], height_schedule=[1.0], x_schedule=[1.0], y_schedule=[1.0], rotation_schedule=[1.0]):
        frames = []
        for frame_idx in range(max_frames):
            width = self.apply_multiply_operation(initial_width, width_schedule, frame_idx)
            height = self.apply_multiply_operation(initial_height, height_schedule, frame_idx)
            x_coord = self.apply_multiply_operation(initial_x_coord, x_schedule, frame_idx)
            y_coord = self.apply_multiply_operation(initial_y_coord, y_schedule, frame_idx)
            rotation_fraction = rotation_schedule[min(frame_idx, len(rotation_schedule) - 1)]
            rotation_degree = rotation_fraction * 360
            
            img = Image.new('RGB', (image_width, image_height), 'black')
            if isinstance(shape, torch.Tensor):
                shape_image = mask2pil(shape)
                shape_image = shape_image.resize((max(int(width), 1), max(int(height), 1)), resample=Image.LANCZOS)
                rotated_shape_image = shape_image.rotate(rotation_degree, expand=True, fillcolor=(0), resample=Image.BILINEAR)
                paste_x = int(x_coord - rotated_shape_image.width / 2)
                paste_y = int(y_coord - rotated_shape_image.height / 2)
                img.paste(rotated_shape_image, (paste_x, paste_y), rotated_shape_image)
            else:
                shape_img = Image.new('RGBA', (max(int(width), 1), max(int(height), 1)), (0, 0, 0, 0))
                shape_draw = ImageDraw.Draw(shape_img)
                self.draw_shape(shape_draw, shape_mode, (shape_img.width / 2, shape_img.height / 2), width, height)
                rotated_shape_img = shape_img.rotate(rotation_degree, expand=True, fillcolor=(0), resample=Image.BILINEAR)
                paste_x = int(x_coord - rotated_shape_img.width / 2)
                paste_y = int(y_coord - rotated_shape_img.height / 2)
                img.paste(rotated_shape_img, (paste_x, paste_y), rotated_shape_img)

            frames.append(img)
            
        if frames:
            tensor = [pil2tensor(img) for img in frames]
            tensor = torch.cat(tensor, dim=0)
        else:
            raise ValueError("No frames were generated!")

        return (tensor, )

```
