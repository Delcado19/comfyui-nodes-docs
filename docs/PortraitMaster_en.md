
# Documentation
- Class name: PortraitMaster
- Category: AI WizArt
- Output node: False

The PortraitMaster node aims to enhance portrait photography through AI technology, offering features such as improving photo realism, customizing facial features, and adjusting styles. It allows users to fine-tune various aspects of portrait images—such as facial expressions, skin texture, and overall photo quality—through a series of input parameters, thereby influencing the generation of enhanced portrait prompts.

# Input types
## Required
- shot
    - Select the shooting method, which affects the composition and angle of the final generated portrait.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- shot_weight
    - Adjust the weight of the selected shooting method, influencing how prominent that specific shooting style appears in the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gender
    - Specify the gender of the portrait subject, affecting the generated character features.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- androgynous
    - Adjust the degree of neutral characteristics in the portrait, allowing for more diverse gender expressions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- age
    - Set the age of the portrait subject, affecting the generated facial features and overall appearance.
    - Comfy dtype: INT
    - Python dtype: int
- nationality_i
    - Select the nationality or ethnic background of the portrait subject, affecting facial features and overall appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- nationality_mix
    - Adjust the degree of blending across multiple nationalities or ethnic characteristics, used to create more diverse appearances.
    - Comfy dtype: FLOAT
    - Python dtype: float
- body_type
    - Select the body type of the portrait subject, affecting overall physique and proportions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- body_type_weight
    - Adjust the weight of the selected body type characteristics, influencing how prominent the body type appears in the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float
- model_pose
    - Select the pose of the portrait subject, affecting overall composition and expressiveness.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clothes
    - Select the clothing style of the portrait subject, affecting overall appearance and atmosphere.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- eyes_color
    - Specify eye color, used to customize the eye characteristics of the portrait subject.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- eyes_shape
    - Select eye shape, further customizing the eye characteristics of the portrait subject.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lips_color
    - Specify lip color, used to customize the lip characteristics of the portrait subject.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lips_shape
    - Select lip shape, further customizing the lip characteristics of the portrait subject.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- facial_expression
    - Select facial expression, affecting the emotional conveyance and overall atmosphere of the portrait.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- facial_expression_weight
    - Determine the weight of the facial expression in the portrait, affecting the intensity and prominence of the selected expression.
    - Comfy dtype: FLOAT
    - Python dtype: float
- face_shape
    - Select a face shape from a predefined list, allowing customization of the subject's facial structure.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- face_shape_weight
    - Set the weight of the face shape in the portrait, affecting the prominence of the selected facial shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- facial_asymmetry
    - Adjust the degree of facial asymmetry, enabling more natural and diverse facial structures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hair_style
    - Select a hairstyle from a predefined list, providing multiple options to customize the subject's appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- hair_color
    - Select hair color from a predefined list, allowing detailed customization of the subject's hair appearance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- hair_length
    - Select hair length from a predefined list, enabling control over how the subject's hair length is presented.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- disheveled
    - Adjust the degree of messy appearance in portraits, allowing fine control over the presentation of hair and overall neatness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- makeup
    - Select the makeup type to apply to the portrait from a predefined list, offering a range of styles to enhance the subject's look.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- beard
    - Choose a beard style for the portrait subject from a predefined list, making facial hair appearance customizable.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- natural_skin
    - Control the naturalness of skin texture in portraits, allowing adjustments for a more realistic skin appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bare_face
    - Adjust the visibility of facial features without makeup, emphasizing the natural beauty of the subject's bare face.
    - Comfy dtype: FLOAT
    - Python dtype: float
- washed_face
    - Modify the facial appearance to look freshly washed, affecting the skin's freshness and cleanliness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dried_face
    - Change appearance to simulate a dry face after washing, affecting skin texture and moisture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skin_details
    - Adjust the degree of skin detail presentation, affecting overall skin texture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skin_pores
    - Control the visibility of skin pores, affecting skin fineness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dimples
    - Adjust the degree of dimple presentation, adding diversity to facial features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- wrinkles
    - Control the prominence of wrinkles, affecting the portrait's sense of age and realism.
    - Comfy dtype: FLOAT
    - Python dtype: float
- freckles
    - Adjust the degree of freckle presentation, adding personalization to facial features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- moles
    - Control the prominence of moles, increasing the uniqueness of facial details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skin_imperfections
    - Adjust the degree of skin blemish presentation, increasing realism and personalization.
    - Comfy dtype: FLOAT
    - Python dtype: float
- skin_acne
    - Control the prominence of acne, affecting the presentation of skin condition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tanned_skin
    - Adjust the tan degree, affecting the overall skin tone.
    - Comfy dtype: FLOAT
    - Python dtype: float
- eyes_details
    - Control the degree of eye detail presentation, enhancing the expressiveness of the eyes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iris_details
    - Adjust the prominence of iris details, increasing the realism of the eyes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- circular_iris
    - Control the roundness of the iris, affecting the overall shape of the eyes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- circular_pupil
    - Adjust the roundness of the pupil, affecting the focus and expressiveness of the eyes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- light_type
    - Choose the light type, affecting the overall lighting effect and atmosphere.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- light_direction
    - Specify the light direction, affecting the distribution of shadows and highlights.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- light_weight
    - Adjust the intensity of the lighting effect, affecting the prominence of the overall lighting.
    - Comfy dtype: FLOAT
    - Python dtype: float
- photorealism_improvement
    - Enable or disable photorealistic enhancement in portraits, adding professional photo quality and balanced exposure to the generated prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt_start
    - Set the initial part of the prompt to guide the generation's starting direction.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_additional
    - Add additional prompt content to supplement and refine the generation instructions.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_end
    - Set the ending part of the prompt to summarize or emphasize specific aspects.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt
    - Specify elements or features to avoid, guiding the generation away from unwanted results.
    - Comfy dtype: STRING
    - Python dtype: str
- style_i
    - Choose a specific art or photography style to affect overall aesthetic presentation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- style_i_weight
    - Adjust the weight of the selected style to influence its prominence in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- random_shot
    - Enable random selection of shooting method to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_gender
    - Enable random selection of gender to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_age
    - Enable random selection of age to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_androgynous
    - Enable random adjustment of neutral feature degree to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_nationality
    - Enable random selection of nationality or ethnic background to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_body_type
    - Enable random selection of body type to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_model_pose
    - Enable random selection of pose to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_clothes
    - Enable random selection of clothing style to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_eyes_color
    - Enable random selection of eye color to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_eyes_shape
    - Enable random selection of eye shape to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_lips_color
    - Enable random selection of lip color to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_lips_shape
    - Enable random selection of lip shape to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_facial_expression
    - Enable random selection of facial expression to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_hairstyle
    - Enable random selection of hairstyle to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_hair_color
    - Enable random selection of hair color to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_hair_length
    - Enable random selection of hair length to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_disheveled
    - Enable random adjustment of messiness level to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_makeup
    - Enable random selection of makeup style to increase result diversity.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_freckles
    - Enable random adjustment of freckle intensity to increase the diversity of generated results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_moles
    - Enable random adjustment of mole prominence to increase the diversity of generated results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_skin_imperfections
    - Enable random adjustment of skin imperfection intensity to increase the diversity of generated results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- random_beard
    - 

## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [ShowText|pysssss](../../ComfyUI-Custom-Scripts/Nodes/ShowText|pysssss.md)
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - [Text Concatenate](../../was-node-suite-comfyui/Nodes/Text Concatenate.md)



## Source code
```python
class PortraitMaster:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        max_float_value = 1.95
        return {
            "optional": {
                "seed": ("INT", {"forceInput": False}),
            },
            "required": {
                "shot": (shot_list, {
                    "default": shot_list[0],
                }),
                "shot_weight": ("FLOAT", {
                    "default": 0,
                    "step": 0.05,
                    "min": 0,
                    "max": max_float_value,
                    "display": "slider",
                }),
                "gender": (gender_list, {
                    "default": gender_list[0],
                }),
                "androgynous": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "age": ("INT", {
                    "default": 30,
                    "min": 18,
                    "max": 90,
                    "step": 1,
                    "display": "slider",
                }),
                "nationality_1": (nationality_list, {
                    "default": nationality_list[0],
                }),
                "nationality_2": (nationality_list, {
                    "default": nationality_list[0],
                }),
                "nationality_mix": ("FLOAT", {
                    "default": 0.5,
                    "min": 0,
                    "max": 1,
                    "step": 0.05,
                    "display": "slider",
                }),
                "body_type": (body_type_list, {
                    "default": body_type_list[0],
                }),
                "body_type_weight": ("FLOAT", {
                    "default": 0,
                    "step": 0.05,
                    "min": 0,
                    "max": max_float_value,
                    "display": "slider",
                }),
                "model_pose": (model_pose_list, {
                    "default": model_pose_list[0],
                }),
                "clothes": (clothes_list, {
                    "default": clothes_list[0],
                }),

                "eyes_color": (eyes_color_list, {
                    "default": eyes_color_list[0],
                }),
                "eyes_shape": (eyes_shape_list, {
                    "default": eyes_shape_list[0],
                }),
                "lips_color": (lips_color_list, {
                    "default": lips_color_list[0],
                }),
                "lips_shape": (lips_shape_list, {
                    "default": lips_shape_list[0],
                }),
                "facial_expression": (facial_expressions_list, {
                    "default": facial_expressions_list[0],
                }),
                "facial_expression_weight": ("FLOAT", {
                    "default": 0,
                    "step": 0.05,
                    "min": 0,
                    "max": max_float_value,
                    "display": "slider",
                }),
                "face_shape": (face_shape_list, {
                    "default": face_shape_list[0],
                }),
                "face_shape_weight": ("FLOAT", {
                    "default": 0,
                    "step": 0.05,
                    "min": 0,
                    "max": max_float_value,
                    "display": "slider",
                }),
                "facial_asymmetry": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "hair_style": (hair_style_list, {
                    "default": hair_style_list[0],
                }),
                "hair_color": (hair_color_list, {
                    "default": hair_color_list[0],
                }),
                "hair_length": (hair_length_list, {
                    "default": hair_length_list[0],
                }),
                "disheveled": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "makeup": (makeup_list, {
                    "default": makeup_list[0],
                }),
                "beard": (beard_list, {
                    "default": beard_list[0],
                }),
                "natural_skin": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "bare_face": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "washed_face": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "dried_face": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "skin_details": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "skin_pores": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "dimples": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "wrinkles": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "freckles": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "moles": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "skin_imperfections": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "skin_acne": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "tanned_skin": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "eyes_details": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "iris_details": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "circular_iris": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "circular_pupil": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "light_type": (light_type_list, {
                    "default": light_type_list[0],
                }),
                "light_direction": (light_direction_list, {
                    "default": light_direction_list[0],
                }),
                "light_weight": ("FLOAT", {
                    "default": 0,
                    "min": 0,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "photorealism_improvement": (["enable", "disable"],),
                "prompt_start": ("STRING", {
                    "multiline": True,
                    "default": "raw photo, (realistic:1.5)"
                }),
                "prompt_additional": ("STRING", {
                    "multiline": True,
                    "default": ""
                }),
                "prompt_end": ("STRING", {
                    "multiline": True,
                    "default": ""
                }),
                "negative_prompt": ("STRING", {
                    "multiline": True,
                    "default": ""
                }),
                "style_1": (style_1_list, {
                    "default": style_1_list[0],
                }),
                "style_1_weight": ("FLOAT", {
                    "default": 1.5,
                    "min": 1,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "style_2": (style_2_list, {
                    "default": style_2_list[0],
                }),
                "style_2_weight": ("FLOAT", {
                    "default": 1.5,
                    "min": 1,
                    "max": max_float_value,
                    "step": 0.05,
                    "display": "slider",
                }),
                "random_shot": ("BOOLEAN", {"default": False}),
                "random_gender": ("BOOLEAN", {"default": False}),
                "random_age": ("BOOLEAN", {"default": False}),
                "random_androgynous": ("BOOLEAN", {"default": False}),
                "random_nationality": ("BOOLEAN", {"default": False}),
                "random_body_type": ("BOOLEAN", {"default": False}),
                "random_model_pose": ("BOOLEAN", {"default": False}),
                "random_clothes": ("BOOLEAN", {"default": False}),
                "random_eyes_color": ("BOOLEAN", {"default": False}),
                "random_eyes_shape": ("BOOLEAN", {"default": False}),
                "random_lips_color": ("BOOLEAN", {"default": False}),
                "random_lips_shape": ("BOOLEAN", {"default": False}),
                "random_facial_expression": ("BOOLEAN", {"default": False}),
                "random_hairstyle": ("BOOLEAN", {"default": False}),
                "random_hair_color": ("BOOLEAN", {"default": False}),
                "random_hair_length": ("BOOLEAN", {"default": False}),
                "random_disheveled": ("BOOLEAN", {"default": False}),
                "random_makeup": ("BOOLEAN", {"default": False}),
                "random_freckles": ("BOOLEAN", {"default": False}),
                "random_moles": ("BOOLEAN", {"default": False}),
                "random_skin_imperfections": ("BOOLEAN", {"default": False}),
                "random_beard": ("BOOLEAN", {"default": False}),
                "random_style_1": ("BOOLEAN", {"default": False}),
                "random_style_2": ("BOOLEAN", {"default": False}),
            }
        }

    RETURN_TYPES = ("STRING","STRING",)
    RETURN_NAMES = ("positive", "negative",)

    FUNCTION = "pm"

    CATEGORY = "AI WizArt"

    def pm(self, shot="-", shot_weight=1, gender="-", body_type="-", body_type_weight=0, eyes_color="-", facial_expression="-", facial_expression_weight=0, face_shape="-", face_shape_weight=0, nationality_1="-", nationality_2="-", nationality_mix=0.5, age=30, hair_style="-", hair_color="-", disheveled=0, dimples=0, freckles=0, skin_pores=0, skin_details=0, moles=0, skin_imperfections=0, wrinkles=0, tanned_skin=0, eyes_details=1, iris_details=1, circular_iris=1, circular_pupil=1, facial_asymmetry=0, prompt_additional="", prompt_start="", prompt_end="", light_type="-", light_direction="-", light_weight=0, negative_prompt="", photorealism_improvement="disable", beard="-", model_pose="-", skin_acne=0, style_1="-", style_1_weight=0, style_2="-", style_2_weight=0, androgynous=0, natural_skin=0, bare_face=0, washed_face=0, dried_face=0, random_gender=False, random_age=False, random_nationality=False, random_hairstyle=False, random_eyes_color=False, random_hair_color=False, random_disheveled=False, random_freckles=False, random_moles=False, random_beard=False, random_shot=False, random_androgynous=False, random_facial_expression=False, random_skin_imperfections=False, random_style_1=False, random_style_2=False, random_body_type=False, random_model_pose=False, hair_length="-", random_hair_length=False, eyes_shape="-", random_eyes_shape=False, lisp_shape="-", lips_color="-", random_lips_color=False, lips_shape="-", random_lips_shape=False, makeup="-", random_makeup=False, clothes="-", random_clothes=False, seed=0):

        prompt = []

        # RANDOMIZER SWITCHES

        if random_shot:
            shot = random.choice(shot_list)
            shot_weight = random.uniform(0.5,1.25)

        if random_gender:
            gender = random.choice(gender_list)

        if random_age:
            age = random.randint(18,75)

        if random_nationality:
            nationality_1 = random.choice(nationality_list)
            nationality_2 = "-"

        if random_hairstyle:
            hair_style = random.choice(hair_style_list)

        if random_model_pose:
            model_pose = random.choice(model_pose_list)

        if random_eyes_color:
            eyes_color = random.choice(eyes_color_list)

        if random_eyes_shape:
            eyes_shape = random.choice(eyes_shape_list)

        if random_lips_color:
            lips_color = random.choice(lips_color_list)

        if random_lips_shape:
            lips_shape = random.choice(lips_shape_list)

        if random_hair_color:
            hair_color = random.choice(hair_color_list)

        if random_hair_length:
            hair_length = random.choice(hair_length_list)

        if random_facial_expression:
            facial_expression = random.choice(facial_expressions_list)
            facial_expression_weight = random.uniform(0.5,1.25)

        if random_body_type:
            body_type = random.choice(body_type_list)
            body_type_weight = random.uniform(0.25,1.25)

        if random_beard:
            beard = random.choice(beard_list)

        if random_androgynous:
            androgynous = random.uniform(0,1)

        if random_disheveled:
            disheveled = random.uniform(0,1.35)

        if random_clothes:
            clothes = random.choice(clothes_list)

        if random_makeup:
            makeup = random.choice(makeup_list)

        if random_freckles:
            freckles = random.uniform(0,1.35)

        if random_moles:
            moles = random.uniform(0,1.35)

        if random_style_1:
            style_1 = random.choice(style_1_list)
            style_1_weight = random.uniform(0.5,1.5)

        if random_style_2:
            style_2 = random.choice(style_2_list)
            style_2_weight = random.uniform(0.5,1.5)

        if random_skin_imperfections:
            skin_imperfections = random.uniform(0.15,1)

        # OPTIONS

        if gender == "-":
            gender = ""
        else:
            gender = gender + " "

        if nationality_1 != '-' and nationality_2 != '-':
            nationality = f"[{nationality_1}:{nationality_2}:{round(nationality_mix, 2)}] "
        elif nationality_1 != '-':
            nationality = nationality_1 + " "
        elif nationality_2 != '-':
            nationality = nationality_2 + " "
        else:
            nationality = ""

        if prompt_start != "":
            prompt.append(f"{prompt_start}")

        if shot != "-" and shot_weight > 0:
            prompt.append(applyWeight(shot,shot_weight))

        prompt.append(f"({nationality}{gender}{round(age)}-years-old:1.5)")

        if androgynous > 0:
            prompt.append(applyWeight('androgynous',androgynous))

        if body_type != "-" and body_type_weight > 0:
            prompt.append(applyWeight(f"{body_type}, {body_type} body",body_type_weight))

        if model_pose != "-":
            prompt.append(f"({model_pose}:1.25)")

        if clothes != "-":
            prompt.append(f"({clothes}:1.05)")

        if eyes_color != "-":
            prompt.append(f"({eyes_color} eyes:1.05)")

        if eyes_shape != "-":
            prompt.append(f"({eyes_shape}:1.05)")

        if lips_color != "-":
            prompt.append(f"({lips_color}:1.05)")

        if lips_shape != "-":
            prompt.append(f"({lips_shape}:1.05)")

        if makeup != "-":
            prompt.append(f"({makeup}:1.05)")

        if facial_expression != "-" and facial_expression_weight > 0:
            prompt.append(applyWeight(f"{facial_expression}, {facial_expression} expression",facial_expression_weight))

        if face_shape != "-" and face_shape_weight > 0:
            prompt.append(applyWeight(f"{face_shape} shape face",face_shape_weight))

        if hair_style != "-":
            prompt.append(f"({hair_style} cut hairstyle:1.05)")

        if hair_color != "-":
            prompt.append(f"({hair_color} hair:1.05)")

        if hair_length != "-":
            prompt.append(f"({hair_length}:1.05)")

        if beard != "-":
            prompt.append(f"({beard}:1.15)")

        if disheveled != "-" and disheveled > 0:
            prompt.append(applyWeight('disheveled',disheveled))

        if prompt_additional != "":
            prompt.append(f"{prompt_additional}")

        if natural_skin > 0:
            prompt.append(applyWeight('natural skin',natural_skin))

        if bare_face > 0:
            prompt.append(applyWeight('bare face',bare_face))

        if washed_face > 0:
            prompt.append(applyWeight('washed-face',washed_face))

        if dried_face > 0:
            prompt.append(applyWeight('dried-face',dried_face))

        if skin_details > 0:
            prompt.append(applyWeight('skin details, skin texture',skin_details))

        if skin_pores > 0:
            prompt.append(applyWeight('skin pores',skin_pores))

        if skin_imperfections > 0:
            prompt.append(applyWeight('skin imperfections',skin_imperfections))

        if skin_acne > 0:
            prompt.append(applyWeight('acne, skin with acne',skin_acne))

        if wrinkles > 0:
            prompt.append(applyWeight('wrinkles',wrinkles))

        if tanned_skin > 0:
            prompt.append(applyWeight('tanned skin',tanned_skin))

        if dimples > 0:
            prompt.append(applyWeight('dimples',dimples))

        if freckles > 0:
            prompt.append(applyWeight('freckles',freckles))

        if moles > 0:
            prompt.append(applyWeight('moles',moles))

        if eyes_details > 0:
            prompt.append(applyWeight('eyes details',eyes_details))

        if iris_details > 0:
            prompt.append(applyWeight('iris details',iris_details))

        if circular_iris > 0:
            prompt.append(applyWeight('circular details',circular_iris))

        if circular_pupil > 0:
            prompt.append(applyWeight('circular pupil',circular_pupil))

        if facial_asymmetry > 0:
            prompt.append(applyWeight('facial asymmetry, face asymmetry',facial_asymmetry))

        if light_type != '-' and light_weight > 0:
            if light_direction != '-':
                prompt.append(applyWeight(f"{light_type} {light_direction}",light_weight))
            else:
                prompt.append(applyWeight(f"{light_type}",light_weight))

        if style_1 != '-' and style_1_weight > 0:
            prompt.append(applyWeight(style_1,style_1_weight))

        if style_2 != '-' and style_2_weight > 0:
            prompt.append(applyWeight(style_2,style_2_weight))

        if prompt_end != "":
            prompt.append(f"{prompt_end}")

        prompt = ", ".join(prompt)
        prompt = prompt.lower()

        if photorealism_improvement == "enable":
            prompt = prompt + ", (professional photo, balanced photo, balanced exposure:1.2)"

        if photorealism_improvement == "enable":
            negative_prompt = negative_prompt + ", (shinny skin, shiny skin, reflections on the skin, skin reflections:1.35)"

        print("=============================================================")
        print("Portrait Master positive prompt:")
        print(prompt)
        print("")
        print("Portrait Master negative prompt:")
        print(negative_prompt)
        print("=============================================================")

        return (prompt,negative_prompt,)

```
