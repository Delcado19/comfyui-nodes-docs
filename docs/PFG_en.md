
# Documentation
- Class name: PFG
- Category: loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

PFG node aims to enhance the conditioning process in generative models by applying learned transformations to the input conditioning vector. It utilizes a pre-trained model to compute features from the input image, then scales these features and combines them with the original conditioning vector to produce a modified conditioning vector that better guides the generation process.

# Input types
## Required
- positive
    - Represents the conditioning vector for desired output attributes or content. It plays a crucial role in guiding the generative model towards outputs that meet specified positive conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - Represents the conditioning vector for undesired attributes or content. Used to guide the generative model to avoid generating outputs with these negative conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- pfg_scale
    - Scaling factor for PFG feature vector, allowing adjustment of its effect on the conditioning process. This parameter fine-tunes the impact of PFG-modified features on the final generation output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image
    - Input image used to extract features using the PFG model. These extracted features are then used to modify the conditioning vector, enhancing the model's ability to generate desired outputs.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- model_name
    - Name of the pre-trained PFG model used for feature extraction. This allows flexible selection of different models based on the specific requirements or features of the input image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- conditioning
    - Modified conditioning vector, including positive and negative, enhanced by features extracted from the input image to better guide the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[List[torch.Tensor, Dict]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class PFG:
    def __init__(self):
        download(CURRENT_DIR)
        self.tagger = ViT(3, 448, 9083)
        self.tagger.load_state_dict(torch.load(os.path.join(CURRENT_DIR, TAGGER_FILE)))
        self.tagger.eval()

    # wd-14-taggerの推論関数
    @torch.no_grad()
    def infer(self, img: Image):
        img = preprocess_image(img)
        img = torch.tensor(img).permute(2, 0, 1).unsqueeze(0)
        print("inferencing by torch model.")
        probs = self.tagger(img).squeeze(0)
        return probs
    
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "positive": ("CONDITIONING",),
                "negative": ("CONDITIONING",),
                "pfg_scale": ("FLOAT", {
                    "default": 1, 
                    "min": 0, #Minimum value
                    "max": 2, #Maximum value
                    "step": 0.05 #Slider's step
                }),
                "image": ("IMAGE", ), 
                "model_name": (get_file_list(os.path.join(CURRENT_DIR,"models")), ),
            }
        }
    RETURN_TYPES = ("CONDITIONING", "CONDITIONING")
    FUNCTION = "add_pfg"
    CATEGORY = "loaders"

    def add_pfg(self, positive, negative, pfg_scale, image, model_name):
        # load weight
        pfg_weight = torch.load(os.path.join(CURRENT_DIR, "models/" + model_name))
        weight = pfg_weight["pfg_linear.weight"].cpu()
        bias = pfg_weight["pfg_linear.bias"].cpu()
        
        # comfyのload imageはtensorを返すので一度pillowに戻す
        tensor = image*255
        tensor = np.array(tensor, dtype=np.uint8)
        image = Image.fromarray(tensor[0])
        
        # text_embs
        cond = positive[0][0]
        uncond = negative[0][0]

        # tagger特徴量の計算
        pfg_feature = self.infer(image)
        
        # pfgの計算
        pfg_cond = (weight @ pfg_feature + bias) * pfg_scale
        pfg_cond = pfg_cond.reshape(1, -1, cond.shape[2])

        # cond側
        pfg_cond = pfg_cond.to(cond.device, dtype=cond.dtype)
        pfg_cond = pfg_cond.repeat(cond.shape[0], 1, 1)

        # uncond側はゼロベクトルでパディング
        cond = torch.cat([cond, pfg_cond], dim=1)
        pfg_uncond_zero = torch.zeros(uncond.shape[0], pfg_cond.shape[1], uncond.shape[2]).to(uncond.device, dtype=uncond.dtype)
        uncond = torch.cat([uncond, pfg_uncond_zero], dim=1)

        return ([[cond, positive[0][1]]], [[uncond, negative[0][1]]])

```
