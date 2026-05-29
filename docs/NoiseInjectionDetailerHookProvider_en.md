# Documentation
- Class name: NoiseInjectionDetailerHookProvider
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The NoiseInjectionDetailerHookProvider node is designed to enhance the detail of the image generation process by strategically injecting noise at specific stages of the image generation cycle. It leverages the power of noise to increase variability and fine-tune the output, ensuring more nuanced and detailed results. This node is essential for applications where the fidelity of generated images is critical, such as creating complex textures or patterns.

# Input types
## Required
- schedule_for_cycle
    - The schedule_for_cycle parameter determines the timing of noise injection within the generation cycle. It is critical for controlling the stages at which noise is introduced, allowing precise manipulation of the level of detail in the image. This parameter is essential for achieving the ideal balance between noise and clarity in the final output.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- source
    - The source parameter determines whether noise generation will be performed on the CPU or GPU. This choice can significantly impact the performance and efficiency of the noise injection process, making it a key consideration for optimizing node operation.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- seed
    - The seed parameter initializes the random number generator, ensuring consistency and reproducibility of the noise. It plays a crucial role in maintaining the predictability of noise injection, which is important for creating reliable and consistent outputs across different runs of the node.
    - Comfy dtype: INT
    - Python dtype: int
- start_strength
    - The start_strength parameter sets the initial intensity of the noise injected at the beginning of the generation cycle. It is a key factor in determining the overall impact of noise on the image, allowing fine-grained control over the level of detail introduced.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_strength
    - The end_strength parameter defines the intensity of the noise at the end of the generation cycle. It allows for a gradual increase or decrease in noise strength, enabling the creation of images with smooth transitions in detail and texture.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- DETAILER_HOOK
    - The output of the NoiseInjectionDetailerHookProvider node is a detailer hook, a specialized tool for injecting noise into the image generation process. This hook is critical because it directly affects the final quality and detail of the generated images, providing a means to enhance the visual fidelity of the output.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: DetailerHook

# Usage tips
- Infra type: GPU

# Source code
```
class NoiseInjectionDetailerHookProvider:
    schedules = ['skip_start', 'from_start']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'schedule_for_cycle': (s.schedules,), 'source': (['CPU', 'GPU'],), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'start_strength': ('FLOAT', {'default': 2.0, 'min': 0.0, 'max': 200.0, 'step': 0.01}), 'end_strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 200.0, 'step': 0.01})}}
    RETURN_TYPES = ('DETAILER_HOOK',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Detailer'

    def doit(self, schedule_for_cycle, source, seed, start_strength, end_strength):
        try:
            hook = hooks.InjectNoiseHookForDetailer(source, seed, start_strength, end_strength, from_start='from_start' in schedule_for_cycle)
            return (hook,)
        except Exception as e:
            print("[ERROR] NoiseInjectionDetailerHookProvider: 'ComfyUI Noise' custom node isn't installed. You must install 'BlenderNeko/ComfyUI Noise' extension to use this node.")
            print(f'\t{e}')
            pass
```