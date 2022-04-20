<?php

namespace ElSchneider\StatamicBardFootnotesButton;

use ProseMirrorToHtml\Nodes\Node;

class Footnote extends Node
{
    protected $nodeType = 'footnote';
    protected $tagName = 'span';


    public function matching(): bool
    {
        return $this->node->type === $this->nodeType;
    }


    public function tag(): ?array
    {
        return [
            [
                'tag' => 'a',
                'attrs' => [
                    'class' => "footnote",
                ],
            ],
        ];
    }
}
