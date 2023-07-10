<?php

namespace App\Http\Controllers\API\Admin\CRUD;

use Cache;

class SettingCrudController extends CrudController
{

    public function setup()
    {
        if (!\Auth::user()->isSuperAdmin()){
            abort(403);
        }

        $this->crud->setModel("App\Models\Setting");
        $this->crud->setEntityNameStrings(trans('backpack::settings.setting_singular'), trans('backpack::settings.setting_plural'));
        $this->crud->setRoute("admin/settings");
        $this->crud->addClause('where', 'active', 1);
        $this->crud->denyAccess(['delete']);

        $this->crud->permission = 'settings';

        $this->crud->setColumns([
            [
                'name'  => 'key',
                'label' => 'Ключ',
            ],
            [
                'name'  => 'name',
                'label' => trans('backpack::settings.name'),
            ],
            [
                'name'  => 'value',
                'label' => trans('backpack::settings.value'),
            ],
            [
                'name'  => 'description',
                'label' => trans('backpack::settings.description'),
            ],
        ]);

        $this->crud->addField([
            'name'  => 'key',
            'label' => 'Ключ',
            'type'  => 'text'
        ]);

        $this->crud->addField([
            'name'  => 'name',
            'label' => 'Название',
            'type'  => 'text'
        ]);

        $this->crud->addField([
            'name'  => 'description',
            'label' => 'Описание',
            'type'  => 'text'
        ]);

        $this->crud->addField([
            'name'  => 'value',
            'label' => trans('backpack::settings.value'),
            'type'       => 'text'
        ]);
    }


    public function store()
    {
        $ret = parent::store();
        Cache::forget('settings');
        return $ret;
    }

    public function update()
    {
        $ret = parent::update();
        Cache::forget('settings');
        return $ret;
    }
}
