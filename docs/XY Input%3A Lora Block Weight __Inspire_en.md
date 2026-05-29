
# Documentation
- Class name: XY Input: Lora Block Weight __Inspire
- Category: InspirePack/LoraBlockWeight
- Output node: False

This node is designed to process and visualize the weights of different blocks in a Lora model, helping understand the model's internal representation through XY plotting. It enables users to compare and contrast the influence of individual blocks, providing insight into model behavior and aiding in optimization or interpretation of its workings.

# Input types
## Required
- category_filter
    - Filter the analysis to a specific category, allowing targeted exploration of block weights within the Lora model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- lora_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- strength_model
    - Adjust the model's strength parameter, affecting the influence of block weights on the overall analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - Set the clipping strength of block weights to optimize visualization by emphasizing more significant weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inverse
    - Determine whether to invert block weights, offering an alternative perspective to observe their impact.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Provide a seed for random number generation to ensure reproducibility of the analysis.
    - Comfy dtype: INT
    - Python dtype: int
- A
    - A parameter that affects block weight calculation and is part of the model's internal configuration.
    - Comfy dtype: FLOAT
    - Python dtype: float
- B
    - Another parameter affecting block weight calculation, helping to increase the depth of model analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preset
    - Select a preset configuration for the analysis to simplify the setup process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- block_vectors
    - Specify the vector of representative blocks to analyze, directly affecting the visualization output.
    - Comfy dtype: STRING
    - Python dtype: str
- heatmap_palette
    - Choose the palette for heatmap visualization to enhance the interpretability of results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- heatmap_alpha
    - Set the opacity of the heatmap to allow adjustment of the visualization's clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- heatmap_strength
    - Determine the intensity of the heatmap, affecting the visual distinguishability of block weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- xyplot_mode
    - Select the mode of XY plotting to define the structure and focus of the visualization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- X (vectors)
    - Output the vector representing the analyzed blocks, preparing for XY plotting and further analysis.
    - Comfy dtype: XY
    - Python dtype: list[XY_Capsule]
- Y (effect_compares)
    - Output the comparison effect of analyzed blocks, facilitating a deeper understanding of their impact through visualization.
    - Comfy dtype: XY
    - Python dtype: list[XY_Capsule]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class XYInput_LoraBlockWeight:
    @staticmethod
    def resolve_vector_string(vector_string, preset_dict):
        vector_string = vector_string.strip()

        if vector_string in preset_dict:
            return vector_string, preset_dict[vector_string]

        vector_infos = vector_string.split(':')

        if len(vector_infos) > 1:
            return vector_infos[0], vector_infos[1]
        elif len(vector_infos) > 0:
            return vector_infos[0], vector_infos[0]
        else:
            return None, None

    @classmethod
    def INPUT_TYPES(cls):
        preset = ["Preset"]  # 20
        preset += load_lbw_preset("lbw-preset.txt")
        preset += load_lbw_preset("lbw-preset.custom.txt")

        default_vectors = "SD-NONE/SD-ALL\nSD-ALL/SD-ALL\nSD-INS/SD-ALL\nSD-IND/SD-ALL\nSD-INALL/SD-ALL\nSD-MIDD/SD-ALL\nSD-MIDD0.2/SD-ALL\nSD-MIDD0.8/SD-ALL\nSD-MOUT/SD-ALL\nSD-OUTD/SD-ALL\nSD-OUTS/SD-ALL\nSD-OUTALL/SD-ALL"

        lora_names = folder_paths.get_filename_list("loras")
        lora_dirs = [os.path.dirname(name) for name in lora_names]
        lora_dirs = ["All"] + list(set(lora_dirs))

        return {"required": {
                             "category_filter": (lora_dirs, ),
                             "lora_name": (lora_names, ),
                             "strength_model": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             "strength_clip": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             "inverse": ("BOOLEAN", {"default": False, "label_on": "True", "label_off": "False"}),
                             "seed": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                             "A": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             "B": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             "preset": (preset,),
                             "block_vectors": ("STRING", {"multiline": True, "default": default_vectors, "placeholder": "{target vector}/{reference vector}", "pysssss.autocomplete": False}),
                             "heatmap_palette": (["viridis", "magma", "plasma", "inferno", "cividis"], ),
                             "heatmap_alpha":  ("FLOAT", {"default": 0.8, "min": 0.0, "max": 1.0, "step": 0.01}),
                             "heatmap_strength": ("FLOAT", {"default": 1.5, "min": 0.0, "max": 10.0, "step": 0.01}),
                             "xyplot_mode": (["Simple", "Diff", "Diff+Heatmap"],),
                             }}

    RETURN_TYPES = ("XY", "XY")
    RETURN_NAMES = ("X (vectors)", "Y (effect_compares)")

    FUNCTION = "doit"
    CATEGORY = "InspirePack/LoraBlockWeight"

    def doit(self, lora_name, strength_model, strength_clip, inverse, seed, A, B, preset, block_vectors, heatmap_palette, heatmap_alpha, heatmap_strength, xyplot_mode, category_filter=None):
        xy_type = "XY_Capsule"

        preset_dict = load_preset_dict()
        common_params = lora_name, strength_model, strength_clip, inverse, block_vectors, seed, A, B, heatmap_palette, heatmap_alpha, heatmap_strength, xyplot_mode

        storage = {}
        x_values = []
        x_idx = 0
        for block_vector in block_vectors.split("\n"):
            if block_vector == "":
                continue

            item = block_vector.split('/')

            if len(item) > 0:
                target_vector = item[0].strip()
                ref_vector = item[1].strip() if len(item) > 1 else ''

                x_item = None
                label, block_vector = XYInput_LoraBlockWeight.resolve_vector_string(target_vector, preset_dict)
                _, ref_block_vector = XYInput_LoraBlockWeight.resolve_vector_string(ref_vector, preset_dict)
                if label is not None:
                    x_item = XY_Capsule_LoraBlockWeight(x_idx, 0, block_vector, label, storage, common_params)
                    x_idx += 1

                if x_item is not None and ref_block_vector is not None:
                    x_item.set_reference_vector(ref_block_vector)

                if x_item is not None:
                    x_values.append(x_item)

        if xyplot_mode == "Simple":
            y_values = [XY_Capsule_LoraBlockWeight(0, 0, '', 'target', storage, common_params)]
        elif xyplot_mode == "Diff":
            y_values = [XY_Capsule_LoraBlockWeight(0, 0, '', 'target', storage, common_params),
                        XY_Capsule_LoraBlockWeight(0, 1, '', 'reference', storage, common_params),
                        XY_Capsule_LoraBlockWeight(0, 2, '', 'diff', storage, common_params)]
        else:
            y_values = [XY_Capsule_LoraBlockWeight(0, 0, '', 'target', storage, common_params),
                        XY_Capsule_LoraBlockWeight(0, 1, '', 'reference', storage, common_params),
                        XY_Capsule_LoraBlockWeight(0, 2, '', 'diff', storage, common_params),
                        XY_Capsule_LoraBlockWeight(0, 3, '', 'heatmap', storage, common_params)]

        return ((xy_type, x_values), (xy_type, y_values), )

```
