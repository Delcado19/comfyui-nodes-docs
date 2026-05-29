# Documentation
- Class name: SeargeMagicBox
- Category: UI.CATEGORY_MAGIC
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node serves as the central coordinator of the image generation process, managing data flow and execution of each stage based on user input and system settings. It is designed to handle complex workflows involving preprocessing, model loading, conditioning, sampling, and post‑processing to produce high‑quality images while allowing extensive customization and control of the generation process.

# Input types
## Required
- stage
- The stage parameter determines the specific operation to execute within the node. It acts as a selector among the node’s various functions, such as loading checkpoints, applying control nets, or generating images. The chosen stage directly influences the output and subsequent steps in the image generation pipeline.
    - Comfy dtype: COMBO[STAGES]
    - Python dtype: str
- input_from
- This parameter specifies the source of the node’s input data. It can be a predefined data stream or a user‑defined input. Input data is critical because it forms the basis for all subsequent processing and directly affects the node’s final output.
    - Comfy dtype: COMBO[INPUT_OUTPUT]
    - Python dtype: str
- output_to
- The output_to parameter indicates where the node’s output should point. It can be set to a custom output or a further processing data stream. This parameter is essential for determining internal data flow within the system and influences how the node’s results are used.
    - Comfy dtype: COMBO[INPUT_OUTPUT]
    - Python dtype: str
## Optional
- data
- The data parameter is a dictionary containing all necessary information and intermediate results that are passed between different stages of the pipeline. It serves as the backbone of the data flow, ensuring that all stages have access to the data required for processing.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- custom_input
- When the node provides custom input, use this parameter. It allows injection of external data or specific configurations that are not part of the standard data stream. The custom_input parameter offers flexibility and adaptability in the image generation process.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Output types
- data
- The node’s data output contains the results of the image generation process, including any processed images, latent representations, and other relevant information. This data serves as input for subsequent pipeline stages or can be saved as the final output.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]
- custom_output
- When input_from is set to custom, use the custom_output parameter. It allows customization of the node’s output to meet specific user requirements or to integrate into a broader system.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
```
class SeargeMagicBox:
    NONE = 'none - skip'
    PRE_PROCESS_DATA = 'pre-process data'
    LOAD_CHECKPOINTS = 'load checkpoints'
    APPLY_LORAS = 'apply loras'
    PROMPT_STYLING = 'prompt styling'
    CLIP_CONDITIONING = 'clip conditioning'
    CLIP_MIXING = 'clip mixing'
    APPLY_CONTROLNET = 'apply controlnet'
    LATENT_INPUTS = 'latent inputs'
    SAMPLING = 'sampling'
    LATENT_DETAILER = 'latent detailer'
    VAE_DECODE_SAMPLED = 'vae decode sampled'
    HIGH_RESOLUTION = 'high resolution'
    HIRES_DETAILER = 'hires detailer'
    VAE_DECODE_HI_RES = 'vae decode hi-res'
    UPSCALING = 'upscaling'
    IMAGE_SAVING = 'image saving'
    STAGES = [NONE, PRE_PROCESS_DATA, LOAD_CHECKPOINTS, APPLY_LORAS, PROMPT_STYLING, CLIP_CONDITIONING, CLIP_MIXING, APPLY_CONTROLNET, LATENT_INPUTS, SAMPLING, LATENT_DETAILER, VAE_DECODE_SAMPLED, HIGH_RESOLUTION, HIRES_DETAILER, VAE_DECODE_HI_RES, UPSCALING, IMAGE_SAVING]
    DATA = 'data stream'
    CUSTOM_AND_DATA = 'custom stage & data stream'
    INPUT_OUTPUT = [DATA, CUSTOM_AND_DATA]

    def __init__(self):
        self.stage_pre_process_data = None
        self.stage_load_checkpoints = None
        self.stage_apply_loras = None
        self.stage_prompt_styling = None
        self.stage_clip_conditioning = None
        self.stage_clip_mixing = None
        self.stage_latent_inputs = None
        self.stage_apply_controlnet = None
        self.stage_sampling = None
        self.stage_vae_decode_sampled = None
        self.stage_latent_detailer = None
        self.stage_high_resolution = None
        self.stage_hires_detailer = None
        self.stage_vae_decode_hi_res = None
        self.stage_upscaling = None
        self.stage_image_saving = None
        self.stage_ = None

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'stage': (s.STAGES, {'default': s.NONE}), 'input_from': (s.INPUT_OUTPUT,), 'output_to': (s.INPUT_OUTPUT,)}, 'optional': {'data': ('SRG_DATA_STREAM',), 'custom_input': ('SRG_STAGE_INPUT',)}}
    RETURN_TYPES = ('SRG_DATA_STREAM', 'SRG_STAGE_OUTPUT')
    RETURN_NAMES = ('data', 'custom_output')
    FUNCTION = 'process'
    CATEGORY = UI.CATEGORY_MAGIC

    def run_stage(self, stage, data, stage_input=None):
        stage_processor = None
        has_data = data is not None
        stage_output = stage_input
        if has_data:
            data['stage_output'] = None
        if stage == self.NONE:
            pass
        elif stage == self.PRE_PROCESS_DATA:
            if self.stage_pre_process_data is None:
                self.stage_pre_process_data = SeargePreProcessData()
            stage_processor = self.stage_pre_process_data
        elif stage == self.LOAD_CHECKPOINTS:
            if self.stage_load_checkpoints is None:
                self.stage_load_checkpoints = SeargeStageLoadCheckpoints()
            stage_processor = self.stage_load_checkpoints
        elif stage == self.APPLY_LORAS:
            if self.stage_apply_loras is None:
                self.stage_apply_loras = SeargeStageApplyLoras()
            stage_processor = self.stage_apply_loras
        elif stage == self.PROMPT_STYLING:
            if self.stage_prompt_styling is None:
                self.stage_prompt_styling = SeargeStage()
            stage_processor = self.stage_prompt_styling
        elif stage == self.CLIP_CONDITIONING:
            if self.stage_clip_conditioning is None:
                self.stage_clip_conditioning = SeargeStageClipConditioning()
            stage_processor = self.stage_clip_conditioning
        elif stage == self.CLIP_MIXING:
            if self.stage_clip_mixing is None:
                self.stage_clip_mixing = SeargeStage()
            stage_processor = self.stage_clip_mixing
        elif stage == self.APPLY_CONTROLNET:
            if self.stage_apply_controlnet is None:
                self.stage_apply_controlnet = SeargeStageApplyControlnet()
            stage_processor = self.stage_apply_controlnet
        elif stage == self.LATENT_INPUTS:
            if self.stage_latent_inputs is None:
                self.stage_latent_inputs = SeargeStageLatentInputs()
            stage_processor = self.stage_latent_inputs
        elif stage == self.SAMPLING:
            if self.stage_sampling is None:
                self.stage_sampling = SeargeStageSampling()
            stage_processor = self.stage_sampling
        elif stage == self.LATENT_DETAILER:
            if self.stage_latent_detailer is None:
                self.stage_latent_detailer = SeargeStageLatentDetailer()
            stage_processor = self.stage_latent_detailer
        elif stage == self.VAE_DECODE_SAMPLED:
            if self.stage_vae_decode_sampled is None:
                self.stage_vae_decode_sampled = SeargeStageVAEDecodeSampled()
            stage_processor = self.stage_vae_decode_sampled
        elif stage == self.HIGH_RESOLUTION:
            if self.stage_high_resolution is None:
                self.stage_high_resolution = SeargeStageHighResolution()
            stage_processor = self.stage_high_resolution
        elif stage == self.HIRES_DETAILER:
            if self.stage_hires_detailer is None:
                self.stage_hires_detailer = SeargeStageHiresDetailer()
            stage_processor = self.stage_hires_detailer
        elif stage == self.VAE_DECODE_HI_RES:
            if self.stage_vae_decode_hi_res is None:
                self.stage_vae_decode_hi_res = SeargeStageVAEDecodeHires()
            stage_processor = self.stage_vae_decode_hi_res
        elif stage == self.UPSCALING:
            if self.stage_upscaling is None:
                self.stage_upscaling = SeargeStageUpscaling()
            stage_processor = self.stage_upscaling
        elif stage == self.IMAGE_SAVING:
            if self.stage_image_saving is None:
                self.stage_image_saving = SeargeStageImageSaving()
            stage_processor = self.stage_image_saving
        else:
            print('WARNING: implementation for stage ' + stage + ' is missing!')
        if stage_processor is None:
            return (data, None)
        stage_input = stage_processor.get_input(data, stage_output)
        stage_result = None
        if stage_input is not None:
            (data, stage_result) = stage_processor.process(data, stage_input)
        if has_data:
            data['stage_output'] = stage_result
        return (data, stage_result)

    def process(self, stage, input_from, output_to, data=None, custom_input=None):
        if data is None:
            data = {}
        stage_input = None
        custom_output = None
        if input_from == self.CUSTOM_AND_DATA:
            stage_input = custom_input
        if PipelineAccess(data).is_pipeline_enabled():
            (data, stage_result) = self.run_stage(stage, data, stage_input)
        else:
            stage_result = None
        if output_to == self.CUSTOM_AND_DATA:
            custom_output = stage_result
        return (data, custom_output)
```