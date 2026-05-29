# Documentation
- Class name: CR_RandomWeightLoRA
- Category: Comfyroll/LoRA
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_RandomWeightLoRA node aims to dynamically assign random weights to LoRA (Low-Rank Adaptation) layers in neural network models. It provides a mechanism to introduce variability and customization into model performance by adjusting the influence of specific LoRA layers. The node operates by generating a unique hash for a given parameter set, then uses that hash to determine whether new random weights should be assigned. This approach ensures that the model's output retains a degree of unpredictability while adapting to different input conditions.

# Input types
## Required
- stride
    - The stride parameter is essential for determining the step size of the node operation. It affects how often the node processes input data and can significantly influence the efficiency and outcome of the node's execution.
    - Comfy dtype: INT
    - Python dtype: int
- force_randomize_after_stride
    - This parameter indicates whether the node should force weight randomization after a certain number of strides. It is important for controlling randomness and ensuring the node does not fall into predictable patterns.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- lora_name
    - The LoRA name parameter specifies which Low-Rank Adaptation layer the node will target. This selection is critical as it determines the specific layer whose weights will be randomized.
    - Comfy dtype: STRING
    - Python dtype: str
- switch
    - The switch parameter acts as a toggle to enable or disable the node's random weight assignment feature. It plays a key role in the node's functionality by controlling whether the randomization process is active.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- weight_min
    - The weight_min parameter sets the lower bound for the range of random weights that can be assigned to the LoRA layer. It is essential for defining the range of the node's operation and influences the variability of the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_max
    - The weight_max parameter sets the upper bound for the range of random weights. It works with weight_min to ensure allocated weights fall within the specified interval, thus controlling the node's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_weight
    - The clip_weight parameter is used to clip or limit the assigned weights to a specific value. It ensures that weights do not exceed a predefined threshold, which is crucial for maintaining the stability of the node's operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_stack
    - The optional lora_stack parameter allows additional LoRA layers to be included in the node's processing. It provides a way to extend the node's capabilities and tailor its behavior to the specific requirements of the task at hand.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Output types
- lora_stack
    - The lora_stack output parameter represents the list of modified LoRA layers with assigned weights after the node execution. It is important because it conveys the final output of the node, reflecting the customization applied to the model.
    - Comfy dtype: LORA_STACK
    - Python dtype: List[Tuple[str, float, float]]

# Usage tips
- Infra type: GPU

# Source code
```
class CR_RandomWeightLoRA:

    @classmethod
    def INPUT_TYPES(cls):
        loras = ['None'] + folder_paths.get_filename_list('loras')
        return {'required': {'stride': ('INT', {'default': 1, 'min': 1, 'max': 1000}), 'force_randomize_after_stride': (['Off', 'On'],), 'lora_name': (loras,), 'switch': (['Off', 'On'],), 'weight_min': ('FLOAT', {'default': 0.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'weight_max': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01}), 'clip_weight': ('FLOAT', {'default': 1.0, 'min': -10.0, 'max': 10.0, 'step': 0.01})}, 'optional': {'lora_stack': ('LORA_STACK',)}}
    RETURN_TYPES = ('LORA_STACK',)
    FUNCTION = 'random_weight_lora'
    CATEGORY = icons.get('Comfyroll/LoRA')
    LastWeightMap = {}
    StridesMap = {}
    LastHashMap = {}

    @staticmethod
    def getIdHash(lora_name: str, force_randomize_after_stride, stride, weight_min, weight_max, clip_weight) -> int:
        fl_str = f'{lora_name}_{force_randomize_after_stride}_{stride}_{weight_min:.2f}_{weight_max:.2f}_{clip_weight:.2f}'
        return hashlib.sha256(fl_str.encode('utf-8')).hexdigest()

    @classmethod
    def IS_CHANGED(cls, stride, force_randomize_after_stride, lora_name, switch, weight_min, weight_max, clip_weight, lora_stack=None):
        id_hash = CR_RandomWeightLoRA.getIdHash(lora_name, force_randomize_after_stride, stride, weight_min, weight_max, clip_weight)
        if switch == 'Off':
            return id_hash + '_Off'
        if lora_name == 'None':
            return id_hash
        if id_hash not in CR_RandomWeightLoRA.StridesMap:
            CR_RandomWeightLoRA.StridesMap[id_hash] = 0
        CR_RandomWeightLoRA.StridesMap[id_hash] += 1
        if stride > 1 and CR_RandomWeightLoRA.StridesMap[id_hash] < stride and (id_hash in CR_RandomWeightLoRA.LastHashMap):
            return CR_RandomWeightLoRA.LastHashMap[id_hash]
        else:
            CR_RandomWeightLoRA.StridesMap[id_hash] = 0
        last_weight = CR_RandomWeightLoRA.LastWeightMap.get(id_hash, None)
        weight = uniform(weight_min, weight_max)
        if last_weight is not None:
            while weight == last_weight:
                weight = uniform(weight_min, weight_max)
        CR_RandomWeightLoRA.LastWeightMap[id_hash] = weight
        hash_str = f'{id_hash}_{weight:.3f}'
        CR_RandomWeightLoRA.LastHashMap[id_hash] = hash_str
        return hash_str

    def random_weight_lora(self, stride, force_randomize_after_stride, lora_name, switch, weight_min, weight_max, clip_weight, lora_stack=None):
        id_hash = CR_RandomWeightLoRA.getIdHash(lora_name, force_randomize_after_stride, stride, weight_min, weight_max, clip_weight)
        lora_list = list()
        if lora_stack is not None:
            lora_list.extend([l for l in lora_stack if l[0] != 'None'])
        weight = CR_RandomWeightLoRA.LastWeightMap.get(id_hash, 0.0)
        if lora_name != 'None' and switch == 'On':
            (lora_list.extend([(lora_name, weight, clip_weight)]),)
        return (lora_list,)
```