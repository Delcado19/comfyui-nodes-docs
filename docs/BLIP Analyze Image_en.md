# Documentation
- Class name: WAS_BLIP_Analyze_Image
- Category: WAS Suite/Text/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_BLIP_Analyze_Image node is designed to analyze and interpret image content using the BLIP (Bootstrapped Language Image Pretraining) model. It provides capabilities to generate captions and ask natural‑language questions about an image, offering insight into visual and contextual aspects of the input image.

# Input types
## Required
- image
- The image parameter is critical to the node’s operation because it is the input the model analyzes to generate a caption or answer a question. It directly affects output quality and analysis results.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- mode
- The mode parameter determines the type of analysis the node will perform on the image. It can be "caption" to generate a description, or "interrogate" to answer questions about the image content.
    - Comfy dtype: COMBO['caption', 'interrogate']
    - Python dtype: str
## Optional
- question
- When mode is set to "interrogate," use the question parameter. It specifies the query the model will attempt to answer based on the image content. The wording of the question can affect answer accuracy and relevance.
    - Comfy dtype: STRING
    - Python dtype: str
- blip_model
- The blip_model parameter allows users to provide a pre‑loaded BLIP model to the node instead of downloading a new one. This can improve efficiency and is especially useful when running the node multiple times.
    - Comfy dtype: BLIP_MODEL
    - Python dtype: Tuple[torch.nn.Module, str]

# Output types
- output
- The output parameter represents the result of the node’s analysis, which may be a caption describing the image or an answer to the posed interrogative question. It summarizes the node’s understanding of the image content.
    - Comfy dtype: TEXT
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_BLIP_Analyze_Image:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'mode': (['caption', 'interrogate'],), 'question': ('STRING', {'default': 'What does the background consist of?', 'multiline': True})}, 'optional': {'blip_model': ('BLIP_MODEL',)}}
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'blip_caption_image'
    CATEGORY = 'WAS Suite/Text/AI'

    def blip_caption_image(self, image, mode, question, blip_model=None):

        def transformImage(input_image, image_size, device):
            raw_image = input_image.convert('RGB')
            raw_image = raw_image.resize((image_size, image_size))
            transform = transforms.Compose([transforms.Resize(raw_image.size, interpolation=InterpolationMode.BICUBIC), transforms.ToTensor(), transforms.Normalize((0.48145466, 0.4578275, 0.40821073), (0.26862954, 0.26130258, 0.27577711))])
            image = transform(raw_image).unsqueeze(0).to(device)
            return image.view(1, -1, image_size, image_size)
        from torchvision import transforms
        from torchvision.transforms.functional import InterpolationMode
        device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
        conf = getSuiteConfig()
        image = tensor2pil(image)
        size = 384
        tensor = transformImage(image, size, device)
        if blip_model:
            mode = blip_model[1]
        if mode == 'caption':
            if blip_model:
                model = blip_model[0].to(device)
            else:
                from .modules.BLIP.blip_module import blip_decoder
                blip_dir = os.path.join(MODELS_DIR, 'blip')
                if not os.path.exists(blip_dir):
                    os.makedirs(blip_dir, exist_ok=True)
                torch.hub.set_dir(blip_dir)
                if conf.__contains__('blip_model_url'):
                    model_url = conf['blip_model_url']
                else:
                    model_url = 'https://storage.googleapis.com/sfr-vision-language-research/BLIP/models/model_base_capfilt_large.pth'
                model = blip_decoder(pretrained=model_url, image_size=size, vit='base')
                model.eval()
                model = model.to(device)
            with torch.no_grad():
                caption = model.generate(tensor, sample=False, num_beams=6, max_length=74, min_length=20)
                cstr(f'\x1b[33mBLIP Caption:\x1b[0m {caption[0]}').msg.print()
                return (caption[0],)
        elif mode == 'interrogate':
            if blip_model:
                model = blip_model[0].to(device)
            else:
                from .modules.BLIP.blip_module import blip_vqa
                blip_dir = os.path.join(MODELS_DIR, 'blip')
                if not os.path.exists(blip_dir):
                    os.makedirs(blip_dir, exist_ok=True)
                torch.hub.set_dir(blip_dir)
                if conf.__contains__('blip_model_vqa_url'):
                    model_url = conf['blip_model_vqa_url']
                else:
                    model_url = 'https://storage.googleapis.com/sfr-vision-language-research/BLIP/models/model_base_vqa_capfilt_large.pth'
                model = blip_vqa(pretrained=model_url, image_size=size, vit='base')
                model.eval()
                model = model.to(device)
            with torch.no_grad():
                answer = model(tensor, question, train=False, inference='generate')
                cstr(f'\x1b[33m BLIP Answer:\x1b[0m {answer[0]}').msg.print()
                return (answer[0],)
        else:
            cstr(f'The selected mode `{mode}` is not a valid selection!').error.print()
            return ('Invalid BLIP mode!',)
```