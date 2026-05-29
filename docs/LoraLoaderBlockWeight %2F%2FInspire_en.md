# Documentation
- Class name: LoraLoaderBlockWeight
- Category: InspirePack/LoraBlockWeight
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to load and manipulate block weights from a LoRA file, adjusting emphasis on different model layers according to specified parameters to fine-tune the output.

# Input types
## Required
- model
    - The model parameter is critical, as it defines the base architecture to which block weights will be applied, significantly influencing the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The clip input is essential for providing contextual information that helps adjust block weights, ensuring the output aligns with the desired context.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- category_filter
    - This parameter filters LoRA files by their category, allowing the node to focus on specific aspects of model layers.
    - Comfy dtype: COMBO[lora_dirs]
    - Python dtype: str
- lora_name
    - The lora_name parameter plays a key role in selecting the specific LoRA file whose block weights will be loaded and manipulated.
    - Comfy dtype: COMBO[lora_names]
    - Python dtype: str
- strength_model
    - This parameter adjusts the influence of model block weights, allowing the output to be fine-tuned to meet specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength_clip parameter modifies the influence of clip contextual information on block weight adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- inverse
    - By toggling this parameter, the node can invert the effect of block weights, providing an alternative perspective on model behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed input initializes the random number generator, ensuring block weight adjustments are reproducible and consistent.
    - Comfy dtype: INT
    - Python dtype: int
- A
    - The A parameter is used to define a base value for certain vector calculations, affecting the overall distribution of block weights.
    - Comfy dtype: FLOAT
    - Python dtype: float
- B
    - Similar to A, the B parameter sets another base value for vector calculations, contributing to the diversity of block weight adjustments.
    - Comfy dtype: FLOAT
    - Python dtype: float
- block_vector
    - The block_vector parameter specifies the sequence of block weights to apply, directly influencing the structure and characteristics of the output.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- preset
    - The preset parameter offers a selection of predefined block weight configurations, simplifying the process of applying common adjustments.
    - Comfy dtype: COMBO[preset]
    - Python dtype: str
- bypass
    - When enabled, this parameter allows the node to bypass block weight adjustments, passing the original model and clip data through unchanged.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - The output model has been adjusted according to the loaded block weights, reflecting the intended modifications to the architecture's behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The output clip data incorporates the block weight adjustments, ensuring contextual information remains consistent with the modified model.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- populated_vector
    - This output provides a detailed record of the applied block weights, serving as a reference for the model's modified structure.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class LoraLoaderBlockWeight:

    def __init__(self):
        self.loaded_lora = None

    @classmethod
    def INPUT_TYPES(s):
        preset = ['Preset']
        preset += load_lbw_preset('lbw-preset.txt')
        preset += load_lbw_preset('lbw-preset.custom.txt')
        preset = [name for name in preset if not name.startswith('@')]
        lora_names = folder_paths.get_filename_list('loras')
        lora_dirs = [os.path.dirname(name) for name in lora_names]
        lora_dirs = ['All'] + list(set(lora_dirs))
        return {'required': {'model': ('MODEL',), 'clip': ('CLIP',), 'category_filter': (lora_dirs,), 'lora_name': (lora_names,), 'strength_model': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'strength_clip': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'inverse': ('BOOLEAN', {'default': False, 'label_on': 'True', 'label_off': 'False'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'A': ('FLOAT', {'default': 4.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'B': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'preset': (preset,), 'block_vector': ('STRING', {'multiline': True, 'placeholder': 'block weight vectors', 'default': '1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1', 'pysssss.autocomplete': False}), 'bypass': ('BOOLEAN', {'default': False, 'label_on': 'True', 'label_off': 'False'})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING')
    RETURN_NAMES = ('model', 'clip', 'populated_vector')
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/LoraBlockWeight'

    @staticmethod
    def validate(vectors):
        if len(vectors) < 12:
            return False
        for x in vectors:
            if x in ['R', 'r', 'U', 'u', 'A', 'a', 'B', 'b'] or is_numeric_string(x):
                continue
            else:
                subvectors = x.strip().split(' ')
                for y in subvectors:
                    y = y.strip()
                    if y not in ['R', 'r', 'U', 'u', 'A', 'a', 'B', 'b'] and (not is_numeric_string(y)):
                        return False
        return True

    @staticmethod
    def convert_vector_value(A, B, vector_value):

        def simple_vector(x):
            if x in ['U', 'u']:
                ratio = np.random.uniform(-1.5, 1.5)
                ratio = round(ratio, 2)
            elif x in ['R', 'r']:
                ratio = np.random.uniform(0, 3.0)
                ratio = round(ratio, 2)
            elif x == 'A':
                ratio = A
            elif x == 'a':
                ratio = A / 2
            elif x == 'B':
                ratio = B
            elif x == 'b':
                ratio = B / 2
            elif is_numeric_string(x):
                ratio = float(x)
            else:
                ratio = None
            return ratio
        v = simple_vector(vector_value)
        if v is not None:
            ratios = [v]
        else:
            ratios = [simple_vector(x) for x in vector_value.split(' ')]
        return ratios

    @staticmethod
    def norm_value(value):
        if value == 1:
            return 1
        elif value == 0:
            return 0
        else:
            return value

    @staticmethod
    def load_lora_for_models(model, clip, lora, strength_model, strength_clip, inverse, seed, A, B, block_vector):
        key_map = comfy.lora.model_lora_keys_unet(model.model)
        key_map = comfy.lora.model_lora_keys_clip(clip.cond_stage_model, key_map)
        loaded = comfy.lora.load_lora(lora, key_map)
        block_vector = block_vector.split(':')
        if len(block_vector) > 1:
            block_vector = block_vector[1]
        else:
            block_vector = block_vector[0]
        vector = block_vector.split(',')
        vector_i = 1
        if not LoraLoaderBlockWeight.validate(vector):
            preset_dict = load_preset_dict()
            if len(vector) > 0 and vector[0].strip() in preset_dict:
                vector = preset_dict[vector[0].strip()].split(',')
            else:
                raise ValueError(f"[LoraLoaderBlockWeight] invalid block_vector '{block_vector}'")
        last_k_unet_num = None
        new_modelpatcher = model.clone()
        populated_ratio = strength_model

        def parse_unet_num(s):
            if s[1] == '.':
                return int(s[0])
            else:
                return int(s)
        input_blocks = []
        middle_blocks = []
        output_blocks = []
        others = []
        for (k, v) in loaded.items():
            k_unet = k[len('diffusion_model.'):]
            if k_unet.startswith('input_blocks.'):
                k_unet_num = k_unet[len('input_blocks.'):len('input_blocks.') + 2]
                input_blocks.append((k, v, parse_unet_num(k_unet_num), k_unet))
            elif k_unet.startswith('middle_block.'):
                k_unet_num = k_unet[len('middle_block.'):len('middle_block.') + 2]
                middle_blocks.append((k, v, parse_unet_num(k_unet_num), k_unet))
            elif k_unet.startswith('output_blocks.'):
                k_unet_num = k_unet[len('output_blocks.'):len('output_blocks.') + 2]
                output_blocks.append((k, v, parse_unet_num(k_unet_num), k_unet))
            else:
                others.append((k, v, k_unet))
        input_blocks = sorted(input_blocks, key=lambda x: x[2])
        middle_blocks = sorted(middle_blocks, key=lambda x: x[2])
        output_blocks = sorted(output_blocks, key=lambda x: x[2])
        np.random.seed(seed % 2 ** 31)
        populated_vector_list = []
        ratios = []
        for (k, v, k_unet_num, k_unet) in input_blocks + middle_blocks + output_blocks:
            if last_k_unet_num != k_unet_num and len(vector) > vector_i:
                ratios = LoraLoaderBlockWeight.convert_vector_value(A, B, vector[vector_i].strip())
                ratio = ratios.pop(0)
                if inverse:
                    populated_ratio = 1 - ratio
                else:
                    populated_ratio = ratio
                populated_vector_list.append(LoraLoaderBlockWeight.norm_value(populated_ratio))
                vector_i += 1
            else:
                if len(ratios) > 0:
                    ratio = ratios.pop(0)
                if inverse:
                    populated_ratio = 1 - ratio
                else:
                    populated_ratio = ratio
            last_k_unet_num = k_unet_num
            new_modelpatcher.add_patches({k: v}, strength_model * populated_ratio)
        ratios = LoraLoaderBlockWeight.convert_vector_value(A, B, vector[0].strip())
        ratio = ratios.pop(0)
        if inverse:
            populated_ratio = 1 - ratio
        populated_vector_list.insert(0, LoraLoaderBlockWeight.norm_value(populated_ratio))
        for (k, v, k_unet) in others:
            new_modelpatcher.add_patches({k: v}, strength_model * populated_ratio)
        new_clip = clip.clone()
        new_clip.add_patches(loaded, strength_clip)
        populated_vector = ','.join(map(str, populated_vector_list))
        return (new_modelpatcher, new_clip, populated_vector)

    def doit(self, model, clip, lora_name, strength_model, strength_clip, inverse, seed, A, B, preset, block_vector, bypass=False, category_filter=None):
        if strength_model == 0 and strength_clip == 0 or bypass:
            return (model, clip, '')
        lora_path = folder_paths.get_full_path('loras', lora_name)
        lora = None
        if self.loaded_lora is not None:
            if self.loaded_lora[0] == lora_path:
                lora = self.loaded_lora[1]
            else:
                temp = self.loaded_lora
                self.loaded_lora = None
                del temp
        if lora is None:
            lora = comfy.utils.load_torch_file(lora_path, safe_load=True)
            self.loaded_lora = (lora_path, lora)
        (model_lora, clip_lora, populated_vector) = LoraLoaderBlockWeight.load_lora_for_models(model, clip, lora, strength_model, strength_clip, inverse, seed, A, B, block_vector)
        return (model_lora, clip_lora, populated_vector)
```