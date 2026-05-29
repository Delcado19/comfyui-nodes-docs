# Documentation
- Class name: CR_XYFromFolder
- Category: Comfyroll/XY Grid
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_XYFromFolder node is designed to process and organize images from a specified folder into a grid layout. It facilitates the creation of a visually structured grid by allowing users to specify annotations for each image, set font sizes, and control the spacing between images. This node is particularly useful for generating annotated image grids for various purposes such as presentations, catalogs, or data visualization.

# Input types
## Required
- image_folder
    - The image folder parameter is critical for defining the source of images to be organized into a grid. It determines the directory from which the node retrieves and processes images.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start index is an optional parameter that determines the starting point of the image selection process. It allows control over which images are included in the grid, starting from a specific position.
    - Comfy dtype: INT
    - Python dtype: int
- end_index
    - The end index parameter specifies the ending point of image selection. It is used to define the range of images to be included in the final grid layout.
    - Comfy dtype: INT
    - Python dtype: int
- max_columns
    - The max columns parameter determines the number of columns in the grid. It is critical for defining the structure of the grid and ensuring a visually balanced layout.
    - Comfy dtype: INT
    - Python dtype: int
- x_annotation
    - The x_annotation parameter is used to provide annotations for the columns of the grid. It adds a layer of information and context to the visual representation of the images.
    - Comfy dtype: STRING
    - Python dtype: str
- y_annotation
    - The y_annotation parameter is similar to x_annotation but is used for the rows of the grid. It ensures that each row is properly labeled and annotated.
    - Comfy dtype: STRING
    - Python dtype: str
- font_size
    - The font size parameter controls the size of the text used for annotations. It is an important aspect of the node's functionality as it affects the readability and aesthetics of the grid.
    - Comfy dtype: INT
    - Python dtype: int
- gap
    - The spacing parameter defines the spacing between images in the grid. It plays a role in the overall visual presentation, ensuring that images are not too crowded.
    - Comfy dtype: INT
    - Python dtype: int
- trigger
    - The trigger parameter is an optional switch that, when activated, initiates image processing and grid creation. It provides a way to control when the node's operation is executed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The IMAGE output provides the final annotated image grid, ready for use in various applications. It represents the result of the node's processing and layout work.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- trigger
    - The trigger output indicates whether the node's operation was executed based on the input trigger. It serves as a feedback mechanism for the node's activation status.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- show_help
    - The show_help output provides a URL link to the node's documentation page. It offers users easy access to additional information and guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_XYFromFolder:

    @classmethod
    def INPUT_TYPES(cls) -> dict[str, t.Any]:
        input_dir = folder_paths.output_directory
        image_folder = [name for name in os.listdir(input_dir) if os.path.isdir(os.path.join(input_dir, name))]
        return {'required': {'image_folder': (sorted(image_folder),), 'start_index': ('INT', {'default': 1, 'min': 0, 'max': 10000}), 'end_index': ('INT', {'default': 1, 'min': 1, 'max': 10000}), 'max_columns': ('INT', {'default': 1, 'min': 1, 'max': 10000}), 'x_annotation': ('STRING', {'multiline': True}), 'y_annotation': ('STRING', {'multiline': True}), 'font_size': ('INT', {'default': 50, 'min': 1}), 'gap': ('INT', {'default': 0, 'min': 0})}, 'optional': {'trigger': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('IMAGE', 'BOOLEAN', 'STRING')
    RETURN_NAMES = ('IMAGE', 'trigger', 'show_help')
    FUNCTION = 'load_images'
    CATEGORY = icons.get('Comfyroll/XY Grid')

    def load_images(self, image_folder, start_index, end_index, max_columns, x_annotation, y_annotation, font_size, gap, trigger=False):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/XY-Grid-Nodes#cr-xy-from-folder'
        if trigger == False:
            return ((), False, show_help)
        input_dir = folder_paths.output_directory
        image_path = os.path.join(input_dir, image_folder)
        file_list = sorted(os.listdir(image_path), key=lambda s: sum(((s, int(n)) for (s, n) in re.findall('(\\D+)(\\d+)', 'a%s0' % s)), ()))
        sample_frames = []
        pillow_images = []
        if len(file_list) < end_index:
            end_index = len(file_list)
        for num in range(start_index, end_index + 1):
            i = Image.open(os.path.join(image_path, file_list[num - 1]))
            image = i.convert('RGB')
            image = np.array(image).astype(np.float32) / 255.0
            image = torch.from_numpy(image)[None,]
            image = image.squeeze()
            sample_frames.append(image)
        resolved_font_path = os.path.join(os.path.dirname(os.path.dirname(os.path.realpath(__file__))), 'fonts\\Roboto-Regular.ttf')
        font = ImageFont.truetype(str(resolved_font_path), size=font_size)
        start_x_ann = start_index % max_columns - 1
        start_y_ann = int(start_index / max_columns)
        column_list = x_annotation.split(';')[start_x_ann:]
        row_list = y_annotation.split(';')[start_y_ann:]
        column_list = [item.strip() for item in column_list]
        row_list = [item.strip() for item in row_list]
        annotation = Annotation(column_texts=column_list, row_texts=row_list, font=font)
        images = torch.stack(sample_frames)
        pillow_images = [tensor_to_pillow(i) for i in images]
        pillow_grid = create_images_grid_by_columns(images=pillow_images, gap=gap, annotation=annotation, max_columns=max_columns)
        tensor_grid = pillow_to_tensor(pillow_grid)
        return (tensor_grid, trigger, show_help)
```