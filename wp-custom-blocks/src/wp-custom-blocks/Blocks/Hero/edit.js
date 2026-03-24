import {
  RichText,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  ColorPalette,
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { title, text, buttonText, backgroundColor } = attributes;

  return (
    <>
      <InspectorControls>
        <PanelBody title="Configurações">
          <p>Cor de fundo</p>
          <ColorPalette
            value={backgroundColor}
            onChange={(color) =>
              setAttributes({ backgroundColor: color })
            }
          />
        </PanelBody>
      </InspectorControls>

      <div style={{ backgroundColor, padding: '40px', color: '#fff' }}>
        <RichText
          tagName="h1"
          value={title}
          onChange={(value) => setAttributes({ title: value })}
        />

        <RichText
          tagName="p"
          value={text}
          onChange={(value) => setAttributes({ text: value })}
        />

        <RichText
          tagName="button"
          value={buttonText}
          onChange={(value) =>
            setAttributes({ buttonText: value })
          }
        />
      </div>
    </>
  );
}
