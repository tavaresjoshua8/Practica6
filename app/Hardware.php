<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hardware extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'computer_id', 'model', 'brand', 'serial',
        'ram', 'processor', 'hdd'
    ];

    public function computer()
    {
        return $this->belongsTo(Computer::class);
    }
}
