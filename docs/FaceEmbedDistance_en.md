# Documentation
- Class name: FaceEmbedDistance
- Category: FaceAnalysis
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_FaceAnalysis.git

The FaceEmbedDistance node aims to analyze and compare facial features using Euclidean and cosine distance metrics. It processes input images and reference images to determine similarity, facilitating facial recognition and verification. The main goal of this node is to enhance facial recognition tasks by providing a comprehensive analysis of facial embeddings.

# Input types
## Required
- analysis_models
    - This parameter contains the models required for face detection and embedding extraction, and is essential for the node to perform facial analysis functions.
    - Comfy dtype: DICTIONARY
    - Python dtype: Dict[str, Any]
- reference
    - Reference images are crucial for comparison with input images. They serve as a baseline for calculating distances and identifying matches, significantly impacting the node's ability to analyze facial similarity.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
- image
    - These are the images to be analyzed and compared with the reference images. The quality and relevance of these images directly affect the node's output and its effectiveness in facial recognition.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
## Optional
- filter_thresh_eucl
    - The Euclidean distance threshold is used to filter out images that are too dissimilar. It plays a key role in controlling the strictness of the facial similarity assessment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- filter_thresh_cos
    - The cosine distance threshold is used together with the Euclidean threshold to refine the facial similarity assessment, focusing on the directionality of facial embeddings rather than just their magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- generate_image_overlay
    - When this option is enabled, it generates an overlay on the input image showing the distance metrics, thus providing a visual representation of the facial analysis results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output images, which may include overlays, represent the analyzed input images. They are essential for visual verification and further analysis.
    - Comfy dtype: LIST
    - Python dtype: List[PIL.Image.Image]
- euclidean
    - This output provides Euclidean distance values, quantifying the degree of difference between the reference image and input images, aiding in the assessment of facial similarity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cosine
    - The cosine distance values provide a measure of directional differences between facial embeddings, complementing the Euclidean distance for a more nuanced facial similarity assessment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- csv
    - The CSV output contains structured records of facial analysis, including distance metrics, which can be used for further statistical analysis and reporting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class FaceEmbedDistance:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'analysis_models': ('ANALYSIS_MODELS',), 'reference': ('IMAGE',), 'image': ('IMAGE',), 'filter_thresh_eucl': ('FLOAT', {'default': 1.0, 'min': 0.001, 'max': 2.0, 'step': 0.001}), 'filter_thresh_cos': ('FLOAT', {'default': 1.0, 'min': 0.001, 'max': 2.0, 'step': 0.001}), 'generate_image_overlay': ('BOOLEAN', {'default': True})}}
    RETURN_TYPES = ('IMAGE', 'FLOAT', 'FLOAT', 'STRING')
    RETURN_NAMES = ('IMAGE', 'euclidean', 'cosine', 'csv')
    OUTPUT_NODE = True
    FUNCTION = 'analize'
    CATEGORY = 'FaceAnalysis'

    def analize(self, analysis_models, reference, image, filter_thresh_eucl=1.0, filter_thresh_cos=1.0, generate_image_overlay=True):
        if generate_image_overlay:
            font = ImageFont.truetype(os.path.join(os.path.dirname(os.path.realpath(__file__)), 'Inconsolata.otf'), 32)
            background_color = ImageColor.getrgb('#000000AA')
            txt_height = font.getmask('Q').getbbox()[3] + font.getmetrics()[1]
        self.analysis_models = analysis_models
        ref = []
        for i in reference:
            ref_emb = self.get_descriptor(np.array(T.ToPILImage()(i.permute(2, 0, 1)).convert('RGB')))
            if ref_emb is not None:
                ref.append(torch.from_numpy(ref_emb))
        if ref == []:
            raise Exception('No face detected in reference image')
        ref = torch.stack(ref)
        ref = np.array(torch.mean(ref, dim=0))
        out = []
        out_eucl = []
        out_cos = []
        for i in image:
            img = np.array(T.ToPILImage()(i.permute(2, 0, 1)).convert('RGB'))
            img = self.get_descriptor(img)
            if img is None:
                eucl_dist = 1.0
                cos_dist = 1.0
            elif np.array_equal(ref, img):
                eucl_dist = 0.0
                cos_dist = 0.0
            else:
                eucl_dist = np.float64(np.linalg.norm(ref - img))
                cos_dist = 1 - np.dot(ref, img) / (np.linalg.norm(ref) * np.linalg.norm(img))
            if eucl_dist <= filter_thresh_eucl and cos_dist <= filter_thresh_cos:
                print(f'\x1b[96mFace Analysis: Euclidean: {eucl_dist}, Cosine: {cos_dist}\x1b[0m')
                if generate_image_overlay:
                    tmp = T.ToPILImage()(i.permute(2, 0, 1)).convert('RGBA')
                    txt = Image.new('RGBA', (image.shape[2], txt_height), color=background_color)
                    draw = ImageDraw.Draw(txt)
                    draw.text((0, 0), f'EUC: {round(eucl_dist, 3)} | COS: {round(cos_dist, 3)}', font=font, fill=(255, 255, 255, 255))
                    composite = Image.new('RGBA', tmp.size)
                    composite.paste(txt, (0, tmp.height - txt.height))
                    composite = Image.alpha_composite(tmp, composite)
                    out.append(T.ToTensor()(composite).permute(1, 2, 0))
                else:
                    out.append(i)
                out_eucl.append(eucl_dist)
                out_cos.append(cos_dist)
        if not out:
            raise Exception('No image matches the filter criteria.')
        img = torch.stack(out)
        csv = 'id,euclidean,cosine\n'
        if len(out_eucl) == 1:
            out_eucl = out_eucl[0]
            out_cos = out_cos[0]
            csv += f'0,{out_eucl},{out_cos}\n'
        else:
            for (id, (eucl, cos)) in enumerate(zip(out_eucl, out_cos)):
                csv += f'{id},{eucl},{cos}\n'
        return (img, out_eucl, out_cos, csv)

    def get_descriptor(self, image):
        embeds = None
        if self.analysis_models['library'] == 'insightface':
            faces = self.analysis_models['detector'].get(image)
            if len(faces) > 0:
                embeds = faces[0].normed_embedding
        else:
            faces = self.analysis_models['detector'](image)
            if len(faces) > 0:
                shape = self.analysis_models['shape_predict'](image, faces[0])
                embeds = np.array(self.analysis_models['face_recog'].compute_face_descriptor(image, shape))
        return embeds
```