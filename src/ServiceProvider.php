<?php

namespace ElSchneider\StatamicBardFootnotesButton;

use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__.'/../dist/js/addon.js',
    ];
    protected $stylesheets = [
        __DIR__.'/../dist/css/addon.css',
    ];

    public function bootAddon()
    {
        parent::boot();
        Augmentor::addNode(Footnote::class);
    }
}
